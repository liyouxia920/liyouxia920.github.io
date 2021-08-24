<template>
  <view class="container">
    <view class="tabSwitch">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-height="12"
        bar-width="60"
        active-color="#333333"
        inactive-color="#606266"
        font-size="45"
        height="120"
      ></u-tabs>
    </view>
    <view class="centerContainer">
      <view class="searchContainer">
        <u-search :animation="true" placeholder="" height="90"></u-search>
      </view>
    </view>
    <view class="listContainer">
      <view v-if="isWords">
        <u-index-list :scrollTop="scrollTop" @select="select">
          <view v-for="(item, index) in indexList" :key="index">
            <u-index-anchor :index="item" />
            <view class="list-cell"> 词组1 </view>
            <view class="list-cell"> 词组2 </view>
            <view class="list-cell"> 词组3 </view>
          </view>
        </u-index-list>
      </view>
      <view v-if="isSentences">
        <u-index-list
          :scrollTop="scrollTop"
          @select="select"
          :index-list="indexList"
        >
          <view v-for="(item, index) in sentenceList" :key="index">
            <u-index-anchor :index="item.letter" />

            <view
              class="list-cell"
              v-for="(item1, index) in item.data"
              :key="index"
            >
              <text>{{ item1.sentence }}</text>
            </view>
          </view>
        </u-index-list>
      </view>
    </view>
    <u-no-network></u-no-network>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "词组",
        },
        {
          name: "句子",
        },
      ],
      current: 0,
      scrollTop: 0,
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      sentenceList: [
        {
          letter: "A",
          data: [
            {
              sentence: "阿姨今天没有来，因为家里有小宝宝需要照顾。",
            },
            {
              sentence: "哎呀！我忘了带钥匙，门打不开了，怎么办？",
            },
            {
              sentence: "爱是我们共同的语言。",
            },
          ],
        },
        {
          letter: "B",
          data: [
            {
              sentence: "别管这个孩子，让他自己高兴的玩吧。",
            },
            {
              sentence: "不客气，大家都是朋友，互相帮助嘛。",
            },
          ],
        },
        {
          letter: "C",
          data: [
            {
              sentence: "吃过晚饭之后会好点，饿了就痛，半夜痛得特别厉害。",
            },
          ],
        },
        {
          letter: "D",
          data: [
            {
              sentence: "大家好！我是王老师，负责教你们数学。",
            },
            {
              sentence: "对不起！我迟到了。",
            },
          ],
        },
        {
          letter: "E",
          data: [
            {
              sentence: "嗯，我想起来了，是大前天开始的，有三四天了。",
            },
          ],
        },
        {
          letter: "F",
          data: [
            {
              sentence: "非常感谢你对我的帮助。",
            },
          ],
        },
        {
          letter: "G",
          data: [
            {
              sentence: "过年时合家团聚是中国人的习惯。",
            },
          ],
        },
        {
          letter: "H",
          data: [
            {
              sentence: "很久不见，你身体还好吗？",
            },
            {
              sentence: "欢迎，请坐，喝点水。",
            },
          ],
        },

        {
          letter: "J",
          data: [
            {
              sentence: "今天是我妹妹的生日，我买了个大蛋糕，想给她一个惊喜。",
            },
            {
              sentence: "今天下午我要去朋友家吃饭。",
            },
          ],
        },
        {
          letter: "M",
          data: [
            {
              sentence: "没关系，不要着急。",
            },
            {
              sentence: "每天早上我们一起去跑步。",
            },
            {
              sentence: "明天的会议很重要，请你安排好时间，准时到场。",
            },
            {
              sentence: "明天开卷考试，请大家准备好相关资料。",
            },
            {
              sentence: "明天咱们俩一起去他家玩好吗？",
            },
          ],
        },
        {
          letter: "N",
          data: [
            {
              sentence: "你好，很高兴见到你。",
            },
            {
              sentence: "你叫什么名字？",
            },
            {
              sentence: "你是做什么工作的？",
            },
            {
              sentence: "你现在有空吗？我想问你一个问题。",
            },
          ],
        },
        {
          letter: "W",
          data: [
            {
              sentence: "我不喜欢上网，我喜欢看电视。",
            },
            {
              sentence: "我的爸爸五十岁了，还在学开车呢。",
            },
            {
              sentence: "我哥哥是个警察，工作非常辛苦，经常需要加班。",
            },
            {
              sentence: "你现在有空吗？我想问你一个问题。",
            },
            {
              sentence: "我家有6口人：爷爷、奶奶、爸爸、妈妈、弟弟和我。",
            },
            {
              sentence: "我明天家里有事，需要请假。",
            },
            {
              sentence: "我小时候的梦想是长大当老板，赚很多很多钱。",
            },
            {
              sentence: "我有许多朋友，其中既有健听人，也有聋人。",
            },
            {
              sentence: "屋子里摆放着一张方桌子，桌子四边放着四把椅子。",
            },
          ],
        },
      ],
      isWords: true,
      isSentences: false,
    };
  },
  components: {},
  methods: {
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
    },
    select(index) {
      console.log("index: ", index);
      console.log("this.scrollTop: ", this.scrollTop);
    },
    change(index) {
      this.current = index;
      console.log(this.current);
      if (this.current === 0) {
        this.isWords = true;
        this.isSentences = false;
      } else {
        this.isWords = false;
        this.isSentences = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .tabSwitch {
    width: 40%;
    margin-top: 10rpx;
  }

  .centerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .searchContainer {
      margin-top: 20rpx;
      width: 90%;
      display: flex;
      align-items: center;
    }
  }
  .listContainer {
    margin-top: 20rpx;
    width: 95%;
    .list-cell {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 24rpx;
      overflow: hidden;
      color: #323233;
      font-size: 14px;
      line-height: 24px;
      background-color: #fff;
    }
  }
}
</style>
