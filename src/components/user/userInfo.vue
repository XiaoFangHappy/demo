<template>
  <div>
    <el-row style="margin:0px;">
      <el-col :span="6">
        <div class="grid-content bg-purple bg-first">
          <el-row :gutter="5" style="margin-bottom: 0px;">
            <el-col style="width: 100%;height:45px">
              <p class="span-white"><i class="el-icon-phone-outline"></i>
                <el-divider direction="vertical"></el-divider>
                当前外呼：13212341234
              </p>
              <el-divider class="line-heng"/>
            </el-col>
            <el-col style="width: 100%;height:30px">
              <p class="span-tittle">叫号人员信息</p>
            </el-col>
            <el-col style="width: 20%">
              <el-avatar icon="el-icon-user-solid" style="margin-left: 10px;"></el-avatar>
            </el-col>
            <el-col style="width: 40%">
              <div>
                <span class="little-span">李*</span><br/>
                <span class="little-span">3304**************</span>
              </div>
            </el-col>
            <el-col style="width: 40%">
              <div>
                <el-link type="warning">宽带标准地址查询</el-link>
              </div>
            </el-col>
            <el-col style="margin-left: 10px;height: 70px;">
              <el-tag>标签一</el-tag>
              <el-tag type="info">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag>标签四</el-tag>
              <el-tag type="info">标签五</el-tag>
            </el-col>
            <el-col>
              <el-divider class="line-heng-padding"/>
            </el-col>
          </el-row>
          <el-row :gutter="5" class="gutter-style" style="margin:0px;">
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">年龄</p>
                <p class="p-content">58岁</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">性别</p>
                <p class="p-content">男</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">星级</p>
                <p class="p-content">2星</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">网龄</p>
                <p class="p-content">11年</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">号码个数</p>
                <p class="p-content">1</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">宽带数量</p>
                <p class="p-content">0</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">副卡数量</p>
                <p class="p-content">0</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">固话数量</p>
                <p class="p-content">0</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">终端类型</p>
                <p class="p-content">苹果||A2217</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">使用时长</p>
                <p class="p-content">2个月</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <p class="p-content">终端类型</p>
                <p class="p-content">4G</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content grid-border">
          <el-row :gutter="5" style="margin-bottom: 0px;">
            <el-col style="width: 100%;height:45px">
              <p class="span-black"> 套餐信息 </p>
              <el-divider class="line-heng"/>
            </el-col>
            <el-col style="width: 100%;height:45px">
              <p class="span-black"> 4G组合套餐
                <el-divider direction="vertical"></el-divider>
                <span style="color: #3894f5">余额：20.8元</span></p>
            </el-col>
            <el-col>
              <div style="width: 90%;height: 20px;margin-left: 5%;">
                <p class="meal-blue-p" style="width: 20%;float: left">语音</p>
                <p class="meal-blue-p" style="float: right">11分钟/60分钟</p>
              </div>
              <div style="width: 90%;margin-left: 5%">
                <el-progress :percentage="11/60*100" :show-text="false"></el-progress>
              </div>
            </el-col>
            <el-col style="margin-top: 18px">
              <div style="width: 90%;height: 20px;margin-left: 5%;">
                <p class="meal-orange-p" style="width: 20%;float: left">流量</p>
                <p class="meal-orange-p" style="float: right">0.58G/10.88G</p>
              </div>
              <div style="width: 90%;margin-left: 5%">
                <el-progress :percentage="0.58/10.88*100" :show-text="false" status="warning"></el-progress>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content grid-border">
          <el-row :gutter="5" style="margin-bottom: 0px;">
            <el-col style="width: 100%;height:45px">
              <p class="span-black">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="产品信息" name="first" :key="'first'">
                  </el-tab-pane>

                  <el-tab-pane label="增值信息" name="second" :key="'second'">
                  </el-tab-pane>
                </el-tabs>
              </p>
            </el-col>
            <el-col>
              <div class="tab-content" v-if="isFirst">
                <p>4G组合套餐</p>
                <p>5G加油包19元5GB（立即生效）</p>
                <p>浙江-5G加油包19元5GB0元折扣（立即生效）</p>
              </div>
              <div class="tab-content" v-if="isSecond">
                <p>5G加油包19元5GB（立即生效）</p>
                <p>浙江-5G加油包19元5GB0元折扣（立即生效）</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content grid-border">
          <el-row :gutter="5" style="margin-bottom: 0px;">
            <el-col style="width: 100%;height:45px">
              <p class="span-black">
                <el-tabs v-model="activeFocus" @tab-click="handleFocus">
                  <el-tab-pane label="聚焦信息" name="focus" :key="'focus'">
                  </el-tab-pane>

                  <el-tab-pane label="流量包订阅信息" name="flow" :key="'flow'">
                  </el-tab-pane>
                </el-tabs>
              </p>
            </el-col>
            <el-col>
              <div class="tab-content" v-if="isFocus">
                <p>泛融合绑定情况，包括强弱绑定类型，绑定的协议产品名称、产品到期时间</p>
                <p>最近一次携转查询记录，包括查询时间、查询结果、查询结果细则</p>
              </div>
              <div class="tab-content" v-if="isFlow">
                <p>5G加油包19元5GB（立即生效）</p>
                <p>浙江-5G加油包19元5GB0元折扣（立即生效）</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :span="6">
        <div class="grid-content grid-border bg-third">
          <el-row :gutter="5" style="margin-bottom: 0px;">
            <el-col style="width: 100%;height:45px">
              <p class="span-black"> 推荐策略（优先级排序） </p>
              <el-divider class="line-heng"/>
            </el-col>
            <el-col style="font-size: 12px;line-height: 25px;color: #6f7172;padding: 10px 5px 5px 10px;">
              <li>3月固移融合||建议58融合（含mifi）
                <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                  <el-button>右边</el-button>
                </el-tooltip>
              </li>
              <li></li>
              <li></li>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8" style="margin-top: -216px;width: 37%;">
        <div class="grid-content grid-border bg-second"></div>
      </el-col>
      <el-col :span="8" style="margin-top: -216px;width: 38%;">
        <div class="grid-content grid-border bg-second"></div>
      </el-col>
      <br/>
      <el-col :span="8" style="width: 25%;">
        <div class="grid-content grid-border-no-bottom bg-fouth"></div>
      </el-col>
      <el-col :span="8" style="width: 50%;">
        <div class="grid-content grid-border-no-bottom bg-fouth"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      // 默认第一个Tab
      activeName: 'first',
      activeFocus: 'focus',
      isFirst: true,
      isSecond: false,
      isFocus: true,
      isFlow: false
    }
  },
  methods: {
    handleClick (tab) {
      if (tab.name === 'first') {
        this.isFirst = true
        this.isSecond = false
      } else if (tab.name === 'second') {
        this.isFirst = false
        this.isSecond = true
      }
    },
    handleFocus (tab) {
      if (tab.name === 'focus') {
        this.isFocus = true
        this.isFlow = false
      } else if (tab.name === 'flow') {
        this.isFocus = false
        this.isFlow = true
      }
    }
  }

}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.grid-border {
  border: 2px solid #d3dce6;
  height: 180px;
}

.bg-purple {
  background: #d3dce6;
  height: 180px;
}

.bg-first {
  height: 400px;
  background-color: #3894f5;
}

.bg-second {
  height: 300px;
}

.bg-third {
  height: 335px;
}

.bg-fouth {
  height: 250px;
  border: 2px solid #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.span-white {
  color: #fff;
  line-height: 45px;
  text-align: left;
  font-size: 14px;
  margin-left: 10px;
}

.span-black {
  color: #676464;
  line-height: 45px;
  text-align: left;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
}

.line-heng {
  margin: 0px;
}

.span-tittle {
  color: #fff;
  margin: 5px 5px 5px 20px;
}

.little-span {
  color: #fff;
  font-size: 12px;
}

.el-tag {
  height: 20px;
  line-height: 20px;
  font-size: 8px;
}

.line-heng-padding {
  margin: 0px 0px 10px 0px;
  background-color: #8c939d;
}

.gutter-style {
  color: #fff;
}

.gutter-style .grid-content {
  margin-bottom: 15px;
}

.p-content {
  text-align: center;
  font-size: 12px;
  padding: 3px 0;
}

.el-link {
  font-size: 12px;
}

.meal-blue-p {
  font-size: 10px;
  color: #3894f5;
}

.meal-orange-p {
  font-size: 10px;
  color: #E6A23C;
}

.tab-content {
  margin-top: 10px;
  font-size: 12px;
  line-height: 25px;
  padding: 0px 0px 0px 10px;
}
</style>
