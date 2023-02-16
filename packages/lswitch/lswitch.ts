
export const switchProps = {
  modelValue:Boolean,
  width:{
    type:Number,
    default:45
  },
  closeColor:{
    type:String,
    default:"#BFBFBF"
  },
  activeColor:{
    type:String,
    default:"#74baff"
  },
  closeText:{
    type:String,
    default:""
  },
  activeText:{
    type:String,
    default:""
  },
  textAlign:{
    type:String,
    default:"left"
  },
  customClass:String,
  showTipsText:Boolean,
  disabled:Boolean,
  
}


export const switchEmit = [
  'update:modelValue',
  'change'
];
