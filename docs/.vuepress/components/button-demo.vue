<template>
  <div class="box">
    <y-button class="button">按钮</y-button>
    <y-button disabled class="disabled button" >按钮</y-button>
    <br>
    <y-button-group>
      <y-button icon="left" class="button">上一页</y-button>
      <y-button icon="right" icon-position="right" class="button">下一页</y-button>
    </y-button-group>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/components/button/button'
  import buttonGroup from '../../../src/components/button/button-group'

  export default {
    components: {
      'y-button': Button,
      'y-button-group': buttonGroup
    },
    data () {
      return {
        isLoading:true,
        content: `
<y-button>按钮</y-button>
<y-button disabled class="disabled">按钮</y-button>
<y-button-group>
    <y-button icon="left">上一页</y-button>
    <y-button icon="right" icon-position="right">下一页</y-button>
</y-button-group>
      `.trim()
      }
    }
  }
</script>

<style scoped lang="scss">
  *{box-sizing:border-box;}
.button{
  margin:5px 3px;
}
</style>
