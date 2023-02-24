<template>
  <div :class="['l-date-box','l-date-default']" v-click-outside>
    <div class="l-date-inner-box">
      <l-input v-model="dateVal" :suffixIcon="Calendar" @clear="clear" :size="size" :clearable="clearable" readonly :placeholder="placeholders" :disabled="disabled"  ></l-input>
      <transition name="slide-fade">
        <div :class="['l-date-option',`l-date-option-${size}`,customClass]" v-if="show">
          <div class="l-date-fipx-box">
            <!-- 年月日 -->
            <div class="l-date-date-box">
              <div :class="['l-date-header',`l-date-header-${size}`]">
                <div class="l-date-btn-left">
                  <span v-if="monthShow"><l-icon class="m-icon-arrow-double-left" @click="onlyYearPrev"><CaretBack /></l-icon></span>
                  <span v-if="!dateShow&&!monthShow"><l-icon class="m-icon-arrow-double-left" @click="getPrevYear"><CaretBack /></l-icon></span>
                  <span v-if="dateShow"><l-icon class="m-icon-arrow-double-left" @click="prevYear"><CaretBack /></l-icon></span>
                  <span v-if="dateShow&&type=='date'" class="l-i-rotate"><l-icon class="m-icon-arrow-right" @click="prevMonth"><ChevronBack /></l-icon></span>
                </div>
                <div class="l-date-btn-center">
                  <span class="chooseYear" @click="chooseYear" v-show="dateShow&&type=='date'">{{selDate.year}} 年 </span>
                  <span class="chooseMonth" @click="chooseMonth" v-show="dateShow&&type=='date'"> {{selDate.month}} 月</span>
                  <span class="chooseMonth" v-show="monthShow" @click="showYaer">{{selDate.year}} 年 </span>
                  <span v-show="!dateShow&&!monthShow||type=='year'">{{yearList[0]+' 年 - '+yearList[yearList.length-1]+' 年'}}</span>
                </div>
                <div class="l-date-btn-right">
                  <span v-if="dateShow&&type=='date'"><l-icon class="m-icon-arrow-right" @click="nextMonth"><ChevronForward/></l-icon></span>
                  <span v-if="dateShow"><l-icon class="m-icon-arrow-double-right" @click="nextYear"><CaretForward/></l-icon></span>
                  <span v-if="!dateShow&&!monthShow"><l-icon class="m-icon-arrow-double-right" @click="getNextYear"><CaretForward/></l-icon></span>
                  <span v-if="monthShow"><l-icon class="m-icon-arrow-double-right" @click="onlyYearNext"><CaretForward/></l-icon></span>
                </div>
              </div>
              <div :class="['l-date-content-box',`l-date-content-box-${size}`]" v-show="dateShow&&type=='date'">
                <div class="l-date-year-month-box">
                  <table>
                    <tbody>
                      <tr>
                        <th><span>一</span></th>
                        <th><span>二</span></th>
                        <th><span>三</span></th>
                        <th><span>四</span></th>
                        <th><span>五</span></th>
                        <th><span>六</span></th>
                        <th><span>日</span></th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index<7" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                            </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=7&&index<14" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=14&&index<21" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=21&&index<28" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=28&&index<35" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in daysList" :key="index">
                          <td v-if="index>=35&&index<42" @click="selectDate(item)" :class="{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}">
                            <span  :class="['choosDateSpan',{active:selDate.date == item.dates},item.month<selDate.month?'prev-month':item.month==selDate.month?'':'next-month',{'date-span-disabled':item.time<disStartDate||item.time>disEndDate}]" :title="item.dates">{{item.day}}</span>
                          </td>
                        </template>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="l-today-box" v-if="showToday&&type=='date'"><span @click="today" class="l-today-span">今天</span></div>
              </div>
              <!-- year -->
              <div :class="['l-choose-year-box',`l-choose-year-box-${size}`]" v-show="!dateShow&&!monthShow
              ||type=='year'">
                <div v-for="(item,index) in yearList" :key="index">
                  <span :class="[{'active':selDate.year==item},'l-chooseYear-span']" @click="dateYearSel(item)">{{item}}</span>
                </div>
              </div>
              <!-- months -->
              <div :class="['l-choose-month-box',`l-choose-month-box-${size}`]" v-show="monthShow">
                <div v-for="(item,index) in monthList" :key="index">
                  <span :class="[{'active':selDate.month==item.m1},'l-chooseMonth-span']" @click="dateMonthSel(item)">{{item.m}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
		  </transition>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'l-datePicker'
}
</script>

<script lang="ts" setup>
import {Calendar, ChevronBack, ChevronForward, CaretForward, CaretBack} from '@vicons/ionicons5';
import { ref,onMounted } from 'vue'
import {
  datePickerProps,
  datePickerEmit
} from './ldatePicker'
import lInput from '../linput/linput.vue';
const emit = defineEmits(datePickerEmit)
const props = defineProps(datePickerProps)
Date.prototype.format = function(fmt) { 
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
const disStartDate = ref(new Date(props.startDate+' 00:00:00').getTime())
const disEndDate = ref(new Date(props.endDate+' 00:00:00').getTime())
const dateVal: any = ref(props.modelValue)
const show = ref(false)
const daysList: any = ref([])
const placeholders = ref(props.placeholder||"")
const dateShow = ref(true)
const yearList = ref([])
const monthList: any = ref([])
const monthShow = ref(false)
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}


const dateObj = (function(){
  var _date = dateVal.value==""?new Date():new Date(dateVal.value);
  return {
    getDate : function(){
      return _date
    },
    setDate : function(date) {
      _date = date;
    }
  };
})();
const getDays = (year,month,start)=>{
  daysList.value = []
  for(let i=start;i<=42;i++){
    daysList.value.push(
      {
        dates:new Date(year, month, i).format(props.format),
        time:new Date(year, month, i).getTime(),
        year:new Date(year, month, i).getFullYear(),
        month:new Date(year, month, i).getMonth()+1,
        day:new Date(year, month, i).getDate(),
      })
  }
}

const selDate: any = ref({
  date:dateObj.getDate().format(props.format),
  year:dateObj.getDate().getFullYear(),
  month:dateObj.getDate().getMonth()+1,
  day:dateObj.getDate().getDate()
})
const getWeek = (date) => {
  return new Date(date).getDay()==0?7:new Date(date).getDay()
}
const setDate = () =>{
  selDate.value.date = dateObj.getDate().format(props.format)
  selDate.value.year = dateObj.getDate().getFullYear()
  selDate.value.month = dateObj.getDate().getMonth()+1
}
// 上一月
const prevMonth = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
  
}
// 下一月
const nextMonth = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
  
}
// 上一年
const prevYear = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear()-1,dateObj.getDate().getMonth(), 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
}
// 下一年
const nextYear = () =>{
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear()+1,dateObj.getDate().getMonth(), 1))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(selDate.value.date))
}
const focus = () => {
  show.value = true
  var date = dateObj.getDate();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), 1))
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  emit('open')
}
const blur = () => {
  show.value = false
  if(props.type=='date'){
    dateShow.value = true
    monthShow.value = false
  }
  emit('close')
}
const clear = () =>{
  dateVal.value = ""
  emit('update:modelValue',dateVal.value)
  emit('clear')
}
const vClickOutside = {
   beforeMount(el){
    let handler = (e) =>{
      if(!props.disabled){
        if(props.type=='year'){
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('l-chooseYear-span')==-1){
            if(!show.value){
              focus()
            }
          }else{
            if(show.value){
              blur()
            }
          }
        }else if(props.type=='month'){
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('l-chooseMonth-span')==-1){
            if(!show.value){
              focus()
            }
          }else{
            if(show.value){
              blur()
            }
          }
        }else{
          if(el.contains(e.target)&&e.target.className.indexOf("choosDateSpan")==-1&&e.target.className.indexOf('clearable-icon')==-1&&e.target.className.indexOf('l-today-span')==-1){
            if(!show.value){
              focus()
            }
          }else if(e.target.className.indexOf('date-span-disabled')==-1){
            // console.log(e.target.className);
            if(show.value){
              blur()
            }
          }
        }
        
      }
    }
    el.handler = handler;
    if(typeof document !== 'undefined'){
      document.addEventListener('click',handler)
    }
  },
  unmounted(el){
    if(typeof document !== 'undefined'){
      document.removeEventListener('click',el.handler)
    }
  }
}
const selectDate = (item) => {
  if(item.time>=disStartDate.value&&item.time<=disEndDate.value){
    if(item.month>selDate.value.month){
      nextMonth()
    }else if(item.month<selDate.value.month){
      prevMonth()
    }
    dateVal.value = item.dates
    selDate.value.date = dateVal.value
    selDate.value.day = item.day
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }
  
}
const getYearList = (startYear) => {
  let list = []
  for(let i=0;i<10;i++){
    list.push((new Date(selDate.value.year)-parseInt(new Date(selDate.value.year)%10))+i)
  }
  return list
}
// 年份选择上一年
const getPrevYear = () => {
  selDate.value.year = selDate.value.year - 10
  yearList.value = getYearList(selDate.value.year)
}
// 年份选择下一年
const getNextYear = () => {
  selDate.value.year = selDate.value.year + 10
  yearList.value = getYearList(selDate.value.year)
}
// 选择年
const chooseYear = () => {
  dateShow.value = false
  yearList.value = getYearList(selDate.value.year)
}
// 选择月
const chooseMonth = () =>{
  dateShow.value = false
  monthShow.value = true
}
const dateYearSel = (item) => {
  if(props.type=='date'){
    monthShow.value = true
    selDate.value.year = item
    dateObj.setDate(new Date(selDate.value.year,selDate.value.month-1, 1))
    setDate()
    getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  }else if(props.type=='year'){
    dateVal.value = item
    selDate.value.year = item
    monthShow.value = false
    dateShow.value = false
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }else{
    monthShow.value = true
    dateShow.value = false
    selDate.value.year = item
  }
  
}
const dateMonthSel = (item) => {
  if(props.type=='month'){
    dateVal.value = new Date(selDate.value.year+'-'+item.m1).format('yyyy-MM')
    selDate.value.month = item.m1
    emit('update:modelValue',dateVal.value)
    emit('change',dateVal.value)
    blur()
  }else{
    monthShow.value = false
    dateShow.value = true
    selDate.value.month = item.m1-1
    dateObj.setDate(new Date(selDate.value.year,selDate.value.month, 1))
    setDate()
    getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(dateObj.getDate().toLocaleDateString()))
  }
  

}
const onlyYearPrev =() =>{
  selDate.value.year = selDate.value.year-1
}
const onlyYearNext =() =>{
  selDate.value.year = selDate.value.year+1
}
const showYaer = () =>{
  dateShow.value = false
  monthShow.value = false
  yearList.value = getYearList(selDate.value.year)
}
const today = () =>{
  var date = new Date();
  dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
  setDate()
  getDays(dateObj.getDate().getFullYear(),dateObj.getDate().getMonth(),2-getWeek(new Date(date.getFullYear(), date.getMonth(), 1)))
  dateVal.value = dateObj.getDate().format(props.format)
  emit('update:modelValue',dateVal.value)
  emit('change',dateVal.value)
  blur()
}
onMounted(()=>{
  monthList.value = []
  for(let i=0;i<12;i++){
    monthList.value.push({m:i+1+'月',m1:i+1})
  }
  if(props.type=='year'){
    dateShow.value = false
    monthShow.value = false
    yearList.value = getYearList(selDate.value.year)
  }
  if(props.type=='month'){
    dateShow.value = false
    monthShow.value = true
  }
})
</script>

<style lang="scss" scoped>
@import './ldatePicker.scss';
</style>