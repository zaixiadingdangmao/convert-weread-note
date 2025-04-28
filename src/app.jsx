import { defineComponent, ref } from 'vue';
import { convertWereadNote } from './lib/convert-weread-note';

export default defineComponent({
	name: 'App',
	props: {},
	setup() {
		const inputText = ref('');
		const markdownText = ref('');

		const handleConvert = () => {
			markdownText.value = convertWereadNote(inputText.value);
		};

		return () => (
			<div class='min-h-screen bg-[#F2F2F7] p-5'>
				<div class='max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-40px)]'>
					<div class='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/20 flex flex-col'>
						<h1 class='text-2xl font-semibold text-[#1C1C1E] mb-5'>
							微信读书笔记转换工具
						</h1>
						<div class='flex-1 flex flex-col min-h-0'>
							<Textarea v-model={inputText.value} />
							<div class='mt-4'>
								<button
									class='px-6 py-3 bg-[#007AFF] text-white rounded-xl text-[15px] font-medium hover:shadow-[0_4px_12px_rgba(0,122,255,0.2)] hover:-translate-y-[1px] active:translate-y-0 transition-all'
									onClick={handleConvert}
								>
									转换为 Markdown
								</button>
							</div>
						</div>
					</div>

					<div class='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/20 flex flex-col'>
						<h1 class='text-2xl font-semibold text-[#1C1C1E] mb-5'>转换结果</h1>
						<div class='flex-1 flex flex-col min-h-0'>
							<Textarea v-model={markdownText.value} />
							<div class='mt-4'>
								<button
									class='px-6 py-3 bg-[#5856D6] text-white rounded-xl text-[15px] font-medium hover:shadow-[0_4px_12px_rgba(88,86,214,0.2)] hover:-translate-y-[1px] active:translate-y-0 transition-all'
									onClick={() =>
										navigator.clipboard.writeText(markdownText.value)
									}
								>
									复制结果
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});

const Textarea = defineComponent({
	name: 'Textarea',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		return () => (
			<textarea
				class='flex-1 w-full p-4 rounded-xl bg-white/50 backdrop-blur-sm border-none focus:outline-none focus:bg-white/80 focus:ring-2 focus:ring-[#007AFF]/20 text-[#1C1C1E] text-[15px] leading-relaxed resize-none'
				placeholder='请粘贴微信读书笔记内容...'
				value={props.modelValue}
				onInput={(e) => emit('update:modelValue', e.target.value)}
			/>
		);
	},
});
