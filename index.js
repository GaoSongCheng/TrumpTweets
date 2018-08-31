window.onload = function () {
    var appDiv = new Vue({
        el: '#container',
        data: {
            temp:{
                originalText:'',
                translateText:'',
                imgUrl:'',
                date:'2018-08-26'
            },
            content:[
                {
                    originalText:'#StopTheBias',
                    translateText:'＃停止偏见',
                    imgUrl:'./img/tweets-img/16.jpg',
                    date:'2018-08-26'
                },
                {
                    originalText:'Watch: Kanye West Says Trump Wants to Be the ‘Greatest President’ for Black Americans http://bit.ly/2MASw7G  via @BreitbartNews',
                    translateText:'观看：Kanye West表示特朗普希望成为美国黑人的“最伟大的总统”http://bit.ly/2MASw7G来自@BreitbartNews',
                    imgUrl:'./img/tweets-img/15.jpg',
                    date:'2018-08-26'
                }, 
                {
                    originalText:'Consumer Confidence Index, just out, is the HIGHEST IN 18 YEARS! Also, GDP revised upward to 4.2 from 4.1. Our country is doing great!',
                    translateText:'消费者信心指数刚刚出来，是18年来最高的！ 此外，GDP从4.1上调至4.2。 我们国家做得很好！',
                    imgUrl:'',
                    date:'2018-08-26'
                },                          
                {
                    originalText:'Add the 2026 World Cup to our long list of accomplishments!',
                    translateText:'将2026年世界杯加入我们的长期成就列表中！',
                    imgUrl:'',
                    date:'2018-08-28'
                },                
                {
                    originalText:'“Consumer confidence pops in August to highest level since October 2000”',
                    translateText:'“8月消费者信心自2000年10月以来达到最高水平”',
                    imgUrl:'./img/tweets-img/14.jpg',
                    date:'2018-08-28'
                },                
                {
                    originalText:'I smile at Senators and others talking about how good free trade is for the U.S. What they don’t say is that we lose Jobs and over 800 Billion Dollars a year on really dumb Trade Deals....and these same countries Tariff us to death. These lawmakers are just fine with this!',
                    translateText:'我对参议员和其他人谈论美国的自由贸易有多好，他们对此表示不满意的是，我们每年因真正愚蠢的贸易交易而失去乔布斯和超过800亿美元......而这些国家则对我们施以压力。 死亡。 这些立法者对此很好！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'NASDAQ has just gone above 8000 for the first time in history!',
                    translateText:'纳斯达克有史以来第一次超过8000！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'“President Trump has done more for minority groups in this country than any president in decades.”  @LouDobbs',
                    translateText:'“特朗普总统在这个国家为少数民族团体做的事情比几十年来任何总统都要多。”@路博布斯',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'.@FLOTUS Melania and I were honored to welcome the President of the Republic of Kenya, @UKenyatta and Mrs. Margaret Kenyatta to the @WhiteHouse today!',
                    translateText:'。@ FLOTUS Melania和我很荣幸今天欢迎肯尼亚共和国总统@UKenyatta和Margaret Kenyatta女士来到@WhiteHouse！',
                    imgUrl:'./img/tweets-img/13.jpg',
                    date:'2018-08-27'
                },
                {
                    originalText:'United States-Mexico Trade Agreement: https://www.whitehouse.gov/briefings-statements/remarks-president-trump-phone-call-president-pena-nieto-mexico-united-states-mexico-trade-agreement/ …',
                    translateText:'美国 - 墨西哥贸易协定：https：//www.whitehouse.gov/briefings-statements/remarks-president-trump-phone-call-president-pena-nieto-mexico-united-states-mexico-trade-agreement/ ...',
                    imgUrl:'./img/tweets-img/12.jpg',
                    date:'2018-08-27'
                },
                {
                    originalText:'“Mainstream Media tries to rewrite history to credit Obama for Trump accomplishments. Since President Trump took office, the economy is booming. The stronger the economy gets, the more desperate his critics are. O had weakest recovery since Great Depression.” @WashTimes',
                    translateText:'“主流媒体试图重写历史，以颂扬奥巴马的特朗普成就。 自特朗普总统上任以来，经济蓬勃发展。 经济越强劲，他的批评者就越绝望。 自大萧条以来，O的复苏最为疲软。“@WashTimes',
                    imgUrl:'',
                    date:'2018-08-26'
                },
                {
                    originalText:'Fantastic numbers on consumer spending released on Friday. Stock Market hits all time high!',
                    translateText:'周五公布的消费者支出数据非常好。 股市创下历史新高！',
                    imgUrl:'',
                    date:'2018-08-26'
                },
                {
                    id:'22',
                    originalText:'Stock Market hit all time high on Friday. Congratulations U.S.A.!',
                    translateText:'股市周五创下历史新高。 祝贺美国！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
				{
                    id:'21',
                    originalText:'Our relationship with Mexico is getting closer by the hour. Some really good people within both the new and old government, and all working closely together....A big Trade Agreement with Mexico could be happening soon!',
                    translateText:'我们与墨西哥的关系日益紧密。 新老政府中的一些非常优秀的人，并且所有人都密切合作......与墨西哥的大贸易协议很快就会发生！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'12',
                    originalText:'Congratulations to new Australian Prime Minister Scott Morrison. There are no greater friends than the United States and Australia!',
                    translateText:'祝贺新任澳大利亚总理斯科特莫里森。 没有比美国和澳大利亚更大的朋友了！',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'11',
                    originalText:'I spoke with Governor David Ige of Hawaii today to express our full support for the people of Hawaii as the State is impacted by #HurricaneLane. The Federal Government is fully committed to helping the people of Hawaii.',
                    translateText:'我今天与夏威夷州州长大卫·伊格交谈，表达了我们对夏威夷人民的全力支持，因为该州受到了#HurricaneLane的影响。 联邦政府完全致力于帮助夏威夷人民。',
                    imgUrl:'./img/tweets-img/11.jpg',
                    date:'2018-08-24'
                },
                {
                    id:'5',
                    originalText:'Our Economy is setting records on virtually every front - Probably the best our country has ever done. Tremendous value created since the Election. The World is respecting us again! Companies are moving back to the U.S.A.',
                    translateText:'我们的经济几乎在每个方面都创下了记录 - 可能是我们国家所做过的最好的。 自选举以来创造的巨大价值。 世界再次尊重我们！ 公司正在回到美国。',
                    imgUrl:'',
                    date:'2018-08-24'
                }, 
                {
                    id:'4',
                    originalText:'Target CEO raves about the Economy. “This is the best consumer environment I’ve seen in my career.” A big statement from a top executive. But virtually everybody is saying this, & when our Trade Deals are made, & cost cutting done, you haven’t seen anything yet!  @DRUDGE_REPORT',
                    translateText:'Target CEO对经济赞不绝口。 “这是我职业生涯中见过的最好的消费环境。”一位高管的重要声明。 但实际上每个人都这么说，当我们的交易成交，成本削减完成后，你还没有看到任何东西！@DRUDGE_REPORT',
                    imgUrl:'',
                    date:'2018-08-24'
                },            
                {
                    id:'2',
                    originalText:'I have authorized an emergency disaster declaration to provide Hawaii the necessary support ahead of #HurricaneLane. Our teams are closely coordinating with the state and local authorities. You are in our thoughts!',
                    translateText:'我已授权紧急灾难声明，以便在#HurricaneLane之前为夏威夷提供必要的支持。 我们的团队正在与州和地方当局密切协调。 你在我们的想法！',
                    imgUrl:'./img/tweets-img/2.jpg',
                    date:'2018-08-23'
                },
                {
                    id:'1',
                    originalText:'It was my great honor to host the Foreign Investment Risk Review Modernization Act Roundtable today at the @WhiteHouse!',
                    translateText:'我很荣幸今天在@WhiteHouse举办外国投资风险评估现代化法案圆桌会议！',
                    imgUrl:'./img/tweets-img/1.jpg',
                    date:'2018-08-23'
                },
                {
                    id:'0',
                    originalText:'Thank you West Virginia. I love you!',
                    translateText:'谢谢西弗吉尼亚州。 我爱你！',
                    imgUrl:'./img/tweets-img/0.jpg',
                    date:'2018-08-21'
                },
            ]
        },
        methods: {
            load: function () {
                
            }
        }
    });
}
