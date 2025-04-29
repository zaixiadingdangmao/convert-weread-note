import { defineComponent, ref } from 'vue';
import { convertWereadNote } from './lib/convert-weread-note';

export default defineComponent({
	name: 'App',
	props: {},
	setup() {
		const inputText = ref(`《西游记》

[明]吴承恩
41个笔记

点评

◆ 2025/04/29 认为好看

世人都晓神仙好，惟有功名忘不了！
古今将相在何方？荒冢一堆草没了。


◆ 2025/02/06 认为好看

难！难！难！道最玄，莫把金丹作等闲。不遇至人传妙诀，空言口困舌头干！



第一回 灵根育孕源流出 心性修持大道生

◆ 人间纵有珍羞味，怎比山猴乐更宁？


第二回 悟彻菩提真妙理 断魔归本合元神

◆ “难！难！难！道最玄，莫把金丹作等闲。不遇至人传妙诀，空言口困舌头干！”


第五回 乱蟠桃大圣偷丹 反天宫诸神捉怪

◆ 果压枝头垂锦弹，花盈枝上簇胭脂。

◆ 先熟的，酡颜醉脸；还生的，带蒂青皮。凝烟肌带绿，映日显丹姿


第八回 我佛造经传极乐 观音奉旨上长安

◆ 人心生一念，天地尽皆知。


附录 陈光蕊赴任逢灾 江流僧复仇报本

◆ 和风吹柳绿，细雨点花红。


第十三回 陷虎穴金星解厄 双叉岭伯钦留僧

◆ 竹敲残月落，鸡唱晓云生


第十九回 云栈洞悟空收八戒 浮屠山玄奘受心经

◆ 行者近前，抡开手抓了一把，叫：“高才，昨日累你引我师父，今日招了一个徒弟，无物谢你，把这些碎金碎银，权作带领钱，拿了去买草鞋穿。以后但有妖精，多作成我几个，还有谢你处哩。”


第二十回 黄风岭唐僧有难 半山中八戒争先

◆ 日落西山藏火镜，月升东海现冰轮


第二十二回 八戒大战流沙河 木叉奉法收悟净

◆ 光阴迅速，历夏经秋，见了些寒蝉鸣败柳，大火￼向西流。


第二十六回 孙悟空三岛求方 观世音甘泉活树

◆ 只是我那唐长老法严量窄


第二十七回 尸魔三戏唐三藏 圣僧恨逐美猴王

◆ 今日昧着惺惺使糊涂，只教我回去，这才是‘鸟尽弓藏，狗烹兔死

◆ 大圣见他不睬，又使个身外法，把脑后毫毛拔了三根，吹口仙气，叫：​“变！”即变了三个行者，连本身四个，四面围住师父下拜。那长老左右躲不脱，好道也受了一拜。


第二十八回 花果山群妖聚义 黑松林三藏逢魔

◆ 正行处，那长老兜住马道：​“八戒，我这一日其实饥了，那里寻些斋饭我吃？​”八戒道：​“师父请下马，在此等老猪去寻。​”长老下了马，沙僧歇了担，取出钵盂，递与八戒。八戒道：​“我去也。​”长老问：​“那里去？​”八戒道：​“莫管。我这一去，钻冰取火寻斋至，压雪求油化饭来。​”


第二十九回 脱难江流来国土 承恩八戒转山林

◆ 小妖道：“想是忘了甚么物件，来取的。”


第三十回 邪魔侵正法 意马忆心猿

◆ 宫娥悚惧，一似雨打芙蓉笼夜雨；彩女忙惊，就如风吹芍药舞春风。


第三十一回 猪八戒义识猴王 孙行者智降妖怪

◆ 行者道：“你那里知道，我自从回来，这几日弄得身上有些妖精气了。师父是个爱干净的，恐怕嫌我。”


第三十七回 鬼王夜谒唐三藏 悟空神化引婴儿

◆ “感天地盖载之恩，日月照临之恩，国王水土之恩，父母养育之恩。”


第四十回 婴儿戏化禅心乱 猿马刀圭木母空

◆ 唐僧教孙行者驮着，行者呵呵笑道：“我驮！我驮！”


第四十五回 三清观大圣留名 车迟国猴王显法

◆ 神龙借此来相助，抬起长江望下浇。


第四十六回 外道弄强欺正法 心猿显圣灭诸邪

◆ 可怜空有唤雨呼风法，怎比长生果正仙？


第五十三回 禅主吞餐怀鬼孕 黄婆运水解邪胎

◆ 我舍侄还是自在为王好，还是与人为奴好？


第五十四回 法性西来逢女国 心猿定计脱烟花

◆ 雪狮子向火


第七十二回 盘丝洞七情迷本 濯垢泉八戒忘形

◆ 他一生好吃没钱酒，偏打老年人


第七十四回 长庚传报魔头狠 行者施为变化能

◆ 山高自有客行路，水深自有渡船人


第七十八回 比丘怜子遣阴神 金殿识魔谈道德

◆ 三藏道：“你若救得我命，情愿与你做徒子做徒孙也。”


第七十九回 寻洞擒妖逢老寿 当朝正主救婴儿

◆ 国王吞之，渐觉身轻病退，后得长生者，皆原于此。


第八十回 姹女育阳求配偶 心猿护主识妖邪

◆ ‘山不碍路，路自通山。’

◆ 也曾悬挂高楼吼，也曾鸣远彩梁声。也曾鸡啼就报晓，也曾天晚送黄昏。不知化铜的道人归何处，铸铜匠作那边存。想他二命归阴府，他无踪迹你无声。”

◆ 贫僧正然感叹你，忽的叮当响一声。想是西天路上无人到，日久多年变作精。”


第八十一回 镇海寺心猿知怪 黑松林三众寻师

◆ 早尽午来昏又至，良宵才过又侵晨。

◆ 行者晓得中了他计，连忙转身来看师父，那有个师父？只见那呆子和沙僧口里呜哩呜哪说甚么。行者怒气填胸，也不管好歹，捞起棍来一片打，连声叫道：“打死你们！打死你们！”

◆ 点头唤出扶桑日，一口吹散满天星。


第八十二回 姹女求阳 元神护道

◆ 即向前伸手摘了个红桃。妖精也去摘了一个青桃。三藏躬身将红桃奉与妖怪道：“娘子，你爱色，请吃这个红桃，拿青的来我吃。”妖精真个换了，且暗喜道：“好和尚啊！果是个真人！一日夫妻未做，却就有这般恩爱也。”


第八十七回 凤仙郡冒天止雨 孙大圣劝善施霖

◆ “人心生一念，天地悉皆知。
善恶若无报，乾坤必有私。”


第九十回 师狮授受同归一 盗道[1]禅静九灵

◆ 那厢因你欲为人师，所以惹出这一窝狮子来也。”


第九十一回 金平府元夜观灯 玄英洞唐僧供状

◆ “我这里向善的人，看经念佛，都指望修到你中华地托生。才见老师丰采衣冠，果然是前生修到的，方得此受用，故当下拜。”


第九十三回 给孤园问古谈因 天竺国朝王遇偶

◆ 起念断然有爱，留情必定生灾。


第九十六回 寇员外喜待高僧 唐长老不贪富惠

◆ 还如果熟自然红，莫问如何修种。

-- 来自微信读书
`);
		const markdownText = ref('');

		const handleConvert = () => {
			markdownText.value = convertWereadNote(inputText.value);
		};

		const handleDownload = () => {
			if (!markdownText.value) return;

			const blob = new Blob([markdownText.value], { type: 'text/markdown' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = '微信读书笔记.md';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
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
							<div class='mt-4 flex gap-3'>
								<button
									class='px-6 py-3 bg-[#5856D6] text-white rounded-xl text-[15px] font-medium hover:shadow-[0_4px_12px_rgba(88,86,214,0.2)] hover:-translate-y-[1px] active:translate-y-0 transition-all'
									onClick={() =>
										navigator.clipboard.writeText(markdownText.value)
									}
								>
									复制结果
								</button>
								<button
									class='px-6 py-3 bg-[#34C759] text-white rounded-xl text-[15px] font-medium hover:shadow-[0_4px_12px_rgba(52,199,89,0.2)] hover:-translate-y-[1px] active:translate-y-0 transition-all'
									onClick={handleDownload}
								>
									下载文件
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
