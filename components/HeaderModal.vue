<script>
  const getRules = () => import('../static/rule.json').then(j => j.default || j);

  export default {
    name: "HeaderModal",
    async created() {
      this.rules = await getRules()
    },
    async asyncData() {
      const rules = await getRules()
      return {
        rules
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        modalHeader: '',
        modalText: '',
        rules: []
      }
    },
    render: function (createElement) {

      this.setContent()
      let ruleNode = ''

      if (this.name === 'rule') {
        ruleNode = createElement('div', {
            style: {
              padding: '15px'
            }
          },
          this.rules.map((rule) => {
            if (typeof rule.article === "object") {

              return createElement('p', {
                style: {
                  paddingBottom: "20px"
                }
              }, [
                rule.article.top,
                rule.article.rules.map((detail) => {
                  return createElement('div', {
                    style: {
                      paddingTop: "10px"
                    }
                  }, detail)
                })
              ])
            } else {
              return createElement('p', {
                style: {
                  paddingBottom: "20px"
                }
              }, rule.article)
            }
          })
        )
      }

      return createElement(
        'modal', {
          attrs: {
            name: this.name,
            height: "auto",
            scrollable: true
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
              },
            }
          ),
          ruleNode
        ]
      )
    },
    methods: {
      setContent() {
        switch (this.name) {
          case 'about': {
            this.modalHeader = '打ち込み写経について',
              this.modalText = 'このサイトでは、主に仏教宗派で使われる様々なお経をタイピング操作で写経する事が出来ます。今後、写経できるお経は随時追加される予定です。'
          }
          break;
        case 'rule': {
          this.modalHeader = '利用規約'
        }
        break;
        case 'policy': {
          this.modalHeader = 'セキュリティーポリシー'
        }
        break;
        }
      },
    }
  }

</script>
