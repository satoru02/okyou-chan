<script>
  export default {
    name: "HeaderModal",
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        modalHeader: '',
        modalText: '',
      }
    },
    render: function (createElement) {
      this.setContent()
      return createElement(
        'modal',
          {
            attrs: {
              name: this.name,
              height: "auto"
            }
          },
        [
          createElement(
            'h1', {
              style: {
                fontWeight: 'bold',
                padding: '15px',
                fontSize: '20px'
              },
              domProps: {
                innerHTML: this.modalHeader
              }
            }
          ),
          createElement(
            'div', {
              style: {
                paddingLeft: '15px',
                paddingBottom: '15px'
              },
              domProps: {
                innerHTML: this.modalText
              }
            }
          )
        ]
      )
    },
    methods: {
      setContent() {
        switch (this.name) {
          case 'about':
            {
              this.modalHeader = '打ち込み写経について',
              this.modalText = 'このサイトでは、主に仏教宗派で使われる様々なお経をタイピング操作で写経する事が出来ます。今後、写経できるお経は随時追加される予定です。'
            }
            break;
          case 'policy':
            {
              this.modalHeader = 'セキュリティーポリシー',
              this.modalText = ``
            }
            break;
          case 'rule':
            {
              this.modalHeader = '利用規約',
              this.modalText = ``
            }
            break;
        }
      }
    }
  }

</script>

<style lang="postcss">
  .about-header {
    font-weight: bold;
    padding: 15px;
    font-size: 20px;
  }

  .about-txt {
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 16px;
  }
</style>
