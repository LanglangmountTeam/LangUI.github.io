<template>
  <div :class="['l-upload-default',customClass]">
    <input 
      type="file" 
      :accept="accept" 
      :multiple="multiple" 
      @change="testChange" 
      hidden 
      ref="refInp"
    >
    <div class="l-preview-img-box">
      <transition-group name="list-img">
        <template  v-if="targetType=='box'&&imgListShow&&!showFileList">
          <div class="l-preview-img-img" v-for="(item,index) in File" :key="index">
            <div class="l-previre-img-actions">
              <img :src="item.preImgUrl" alt="">
              <div class="customArea">
                <slot v-if="$slot['default']"></slot>
                <i class="customIcon m-icon-ashbin" v-else @click="deleteImg(index)">
                  <Icon><Trash /></Icon>
                </i>
              </div>
            </div>
          </div>
        </template>
      </transition-group>
      <l-button 
        :type="type ? type : 'primary'"  
        @click="changeFile" 
        v-if="targetType=='btn'"
        >
        {{label}}
      </l-button>
      <div :class="[
        'l-upload-area',
        {'l-upload-area-big':size=='big',
        'l-upload-area-active':activeFile}
        ]" 
        v-if="targetType=='box'" 
        ref="refDiv"
      >
        <div class="l-upload-area-text" @click="changeFile">
          <div class="l-upload-text-pos">
            <!-- <i :class="icon" class="icon-file"></i> -->
            <i class="icon-file">
              <Icon><CloudUpload/></Icon>
              
            </i>
            <p v-if="label!=''">{{lableText}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="l-upload-filelist" v-if="FileList.length>0&&showFileList">
      <ul>
        <transition-group name="list">
          <li v-for="(item,index) in FileList" :key="index">
            <div>
              <span>{{item.name}}</span>
              <i class="delete" @click="deleteImg(index)">
                <Icon><Close/></Icon>
                <!-- <img src="./img/deleteString.png" style="width: 20px; height: 20px;" alt=""> -->
              </i>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'l-upload'
}
</script>

<script lang="ts" setup>
import { ref, reactive, onMounted, useSlots } from 'vue';
import { uploadProps, uploadEmit } from './lupload';
import  Icon  from '../licon/licon.vue'
import {Close, CloudUpload, Trash} from '@vicons/ionicons5';
const emit = defineEmits(uploadEmit)
const props = defineProps(uploadProps)
const $slot = useSlots()
const windowURL: any = typeof window !== 'undefined'?window.URL || window.webkitURL:'';

const File = reactive<any []>([])
const FileList = reactive<any []>(props.fileList||[])
const lableText = ref(props.label)
const activeFile = ref(false)
const refInp = ref()
const refDiv = ref()


const changeFile = () =>{
  emit('beforeChange')
  // console.log(refInp);
  refInp.value.click()
}

const testChange = (e) =>{
  File.unshift(...e.target.files)
  FileList.unshift(...e.target.files)
  File.forEach((item,index)=>{
    item.preImgUrl = windowURL.createObjectURL(item);
  })
  emit('change',File)
  emit('update:fileList',File)
}

const deleteImg = (index) =>{
  File.splice(index,1)
  FileList.splice(index,1)
  emit('update:fileList',File)
}


onMounted(()=>{
  if(props.drop&&props.targetType=='box'){
    let dropArea = refDiv.value
    dropArea.addEventListener('drop',(e)=>{
      e.stopPropagation()
      e.preventDefault()
      File.unshift(...e.dataTransfer.files)
      FileList.unshift(...e.dataTransfer.files)
      File.forEach((item,index)=>{
        item.preImgUrl = windowURL.createObjectURL(item);
      })
      emit('change',File)
      emit('update:fileList',File)
      lableText.value = props.label
      activeFile.value = false
    }, false)
    dropArea.addEventListener('dragleave', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = false
      lableText.value = props.label
    })
    dropArea.addEventListener('dragenter', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      lableText.value = "松开鼠标完成"
      emit('beforeChange')
    })
    dropArea.addEventListener('dragover', (e) => {
      e.stopPropagation()
      e.preventDefault()
      activeFile.value = true
      lableText.value = "松开鼠标完成"
    })
  }
})

</script>

<style lang="scss" scoped>
@import './lupload.scss';

</style>