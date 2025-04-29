const BR_TAG = '\n';
const TAB_TAG = '\t';

const CHAPTER_SPLIT_TAG = '◆';
const NOTE_SPLIT_TAG = '>>';

export function convertWereadNote(note) {
	// 分割成行
	const lines = note.split('\n');
	let markdown = '';
	let annotations = [];

	// 找到第一个 ◆ 的位置
	let firstNoteIndex = lines.findIndex((line) =>
		line.trim().startsWith(CHAPTER_SPLIT_TAG)
	);
	if (firstNoteIndex === -1) firstNoteIndex = lines.length;

	// 获取书本信息（从开始到第一个 ◆ 之前）
	const bookInfoLines = lines
		.slice(0, firstNoteIndex)
		.filter((line) => line.trim());
	// 按顺序获取书本信息
	const bookTitle = bookInfoLines[0]?.trim() || '';
	const author = bookInfoLines[1]?.trim() || '';
	const noteCount = bookInfoLines[2]?.trim() || '';
	const firstChapter = bookInfoLines[3]?.trim() || '';

	// 获取当前时间并格式化
	const now = new Date();
	const formattedDate = now.toLocaleString('zh-CN', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	}).replace(/\//g, '-');

	// 添加书名作为一级标题
	markdown += `# ${bookTitle}\n\n`;
	markdown += `> 书名：${bookTitle}\n> 作者：${author}\n> 笔记：${noteCount}\n> 时间：${formattedDate}\n\n`;

	// 处理章节内容（从第一个章节标题开始）
	const chapterContent = lines.slice(firstNoteIndex);
	let currentChapter = firstChapter;

	// 如果第一段标题存在，先输出
	if (firstChapter) {
		markdown += `## ${firstChapter}\n\n`;
	}

	for (let i = 0; i < chapterContent.length; i++) {
		const line = chapterContent[i].trim();
		if (!line) continue;

		// 处理章节标题（不是 ◆ 开头且不是 -- 开头的内容）
		if (!line.startsWith(CHAPTER_SPLIT_TAG) && !line.startsWith('--')) {
			currentChapter = line;
			markdown += `## ${line}\n\n`;
			continue;
		}

		// 处理笔记内容
		if (line.startsWith(CHAPTER_SPLIT_TAG)) {
			const noteContent = line.substring(1).trim();

			// 检查是否是批注信息（包含日期格式）
			if (noteContent.match(/\d{4}\/\d{2}\/\d{2}/)) {
				// 获取批注信息
				const annotationLines = [];
				const originalText = [];
				let hasOriginalText = false;

				annotationLines.push(noteContent);

				// 获取作者和原文标题
				while (i + 1 < chapterContent.length) {
					const nextLine = chapterContent[i + 1].trim();
					if (nextLine.startsWith(CHAPTER_SPLIT_TAG)) break;
					if (nextLine) {
						if (nextLine.startsWith('原文：')) {
							hasOriginalText = true;
							originalText.push(nextLine.substring(3).trim());
						} else if (hasOriginalText) {
							originalText.push(nextLine);
						} else {
							annotationLines.push(nextLine);
						}
					}
					i++;
				}

				// 收集批注信息
				if (originalText.length > 0) {
					annotations.push({
						original: originalText.join('\n'),
						annotation: annotationLines.join('\n'),
					});
				}

				// 输出原文内容
				if (originalText.length > 0) {
					markdown += `- ${originalText.join('\n')}\n\n`;
				}
				continue;
			}

			// 普通笔记内容
			markdown += `- ${noteContent}\n\n`;
			continue;
		}

		// 处理来源
		if (line.startsWith('--')) {
			markdown += `*${line}*\n`;
			continue;
		}
	}

	// 在文章最后添加批注内容
	if (annotations.length > 0) {
		markdown += '\n---\n\n**我的想法：**\n\n';
		for (const annotation of annotations) {
			markdown += `**${annotation.original}**\n\n`;
			markdown += `> ${annotation.annotation}\n\n`;
		}
	}

	return markdown;
}
