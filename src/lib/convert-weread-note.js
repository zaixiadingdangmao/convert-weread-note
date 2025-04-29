const EMPTY_SPLIT_LINE = '\n\n';
const LINE_SPLIT_TAG = '\n';
const CHAPTER_SPLIT_TAG = '◆';

export function convertWereadNote(note) {
	let markdown = '';

	// 把多余两行换行符换成两行
	// note = note.replace(/\n{2,3}/g, EMPTY_SPLIT_LINE);

	// 按照空行分割成行
	const lines = note.split(EMPTY_SPLIT_LINE);
	const { bookTitle, author, noteCount, formattedDate } =
		generateBookInfo(lines);

	markdown += `# ${bookTitle}${EMPTY_SPLIT_LINE}`;
	markdown += `> 书名：${bookTitle}${LINE_SPLIT_TAG}> 作者：${author}${LINE_SPLIT_TAG}> 数量：${noteCount}${LINE_SPLIT_TAG}> 时间：${formattedDate}${EMPTY_SPLIT_LINE}`;
	const chapterLines = lines.slice(2);

	const comments = [];
	const annotations = [];
	let source = '';

	markdown += `## 笔记${EMPTY_SPLIT_LINE}`;
	for (let i = 0; i < chapterLines.length; i++) {
		let line = chapterLines[i];
		line = line.startsWith(LINE_SPLIT_TAG)
			? line.replace(LINE_SPLIT_TAG, '')
			: line;

		if (!line) continue;

		if (line.startsWith('点评')) {
			while (i + 1 < chapterLines.length) {
				const comment = chapterLines[i + 1].trim();
				const content = chapterLines[i + 2].trim();
				if (!comment) break;
				if (!comment.startsWith(CHAPTER_SPLIT_TAG)) {
					break;
				}

				comments.push({
					time: comment.substring(1).trim(),
					content,
				});

				i += 2;
			}
			continue;
		}

		// 处理笔记内容
		if (line.startsWith(CHAPTER_SPLIT_TAG)) {
			const noteContent = line.substring(1).trim();

			// 处理笔记内容中的想法
			if (noteContent.match(/\d{4}\/\d{2}\/\d{2}发表想法/)) {
				const annotationLines = [];
				const originalText = [];

				annotationLines.push(noteContent);

				// 获取作者和原文标题
				while (i + 1 < chapterLines.length) {
					const nextLine = chapterLines[i + 1].trim();
					if (!nextLine) break;
					if (nextLine.startsWith(CHAPTER_SPLIT_TAG)) break;

					if (nextLine.startsWith('原文：')) {
						originalText.push(nextLine.substring(3).trim());
					} else {
						annotationLines.push(nextLine);
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
			} else {
				// 普通笔记内容
				markdown += `- ${noteContent}\n\n`;
			}

			continue;
		}

		// 处理来源
		if (line.startsWith('-- 来自')) {
			source = `${line.replace(LINE_SPLIT_TAG, '')}`;
			continue;
		}

		markdown += `### ${line}${EMPTY_SPLIT_LINE}`;
	}

	// 将批注添加到markdown中
	if (annotations.length > 0) {
		markdown += `## 想法${EMPTY_SPLIT_LINE}`;
		annotations.forEach((annotation) => {
			const [time, content] = annotation.annotation.split('\n');
			markdown += `**${annotation.original}**${EMPTY_SPLIT_LINE}`;
			markdown += `> ${time}${LINE_SPLIT_TAG}> ${content}${EMPTY_SPLIT_LINE}`;
		});
	}

	// 将点评添加到markdown中
	if (comments.length > 0) {
		markdown += `## 点评${EMPTY_SPLIT_LINE}`;
		comments.forEach((comment) => {
			markdown += `### ${comment.time}${EMPTY_SPLIT_LINE}`;
			markdown += `${comment.content}${EMPTY_SPLIT_LINE}`;
		});
	}

	if (source) {
		markdown += `---\n\n_${source}_${LINE_SPLIT_TAG}`;
	}

	return {
		bookTitle: bookTitle.replace(/[《》]/g, ''),
		markdown,
	};
}

const generateBookInfo = (lines) => {
	const bookTitle = lines[0];
	const [author, noteCount] = lines[1].split(LINE_SPLIT_TAG);
	const formattedDate = new Date()
		.toLocaleString('zh-CN', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false,
		})
		.replace(/\//g, '-');

	return {
		bookTitle,
		author,
		noteCount,
		formattedDate,
	};
};
