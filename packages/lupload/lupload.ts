
export const uploadProps = {
  accept: String,
  multiple: Boolean,
  type: String,
  label:{
    type: String,
    default:""
  },
  size:{
    type: String,
    default:""
  },
  targetType:{
    type: String,
    default:"btn"
  },
  fileList:{
    type: Array,
    default: ()=>{
      return []
    }
  },
  drop: Boolean,
  customClass: String,
  showFileList: Boolean,
  imgListShow: Boolean
}


export const uploadEmit = [
  'change',
  'update:fileList',
  'beforeChange'
];
