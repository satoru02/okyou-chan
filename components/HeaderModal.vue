<script>
  const getRules = () => import('../static/rule.json').then(j => j.default || j);
  const getPolicies = () => import('../static/policy.json').then(j => j.default || j);

  export default {
    name: "HeaderModal",
    async created() {
      this.rules = await getRules()
      this.policies = await getPolicies()
    },
    async asyncData() {
      const rules = await getRules()
      const policies = await getPolicies()
      return {
        rules,
        policies
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
        rules: [],
        policies: [],
        domContent: []
      }
    },
    render: function (createElement) {
      this.setContent()
      let textNode = ''

      if (this.name === 'rule') {
        this.domContent = this.rules
      } else if (this.name === 'policy') {
        this.domContent = this.policies
      }

      if ((this.name === 'rule') || (this.name === 'policy')) {
        textNode = createElement('div', {
            style: {
              padding: '15px'
            }
          },
          this.domContent.map((rule) => {
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
      } else {
        textNode = createElement(
          'div', {
            style: {
              paddingLeft: '15px',
              paddingBottom: '15px'
            },
            domProps: {
              innerHTML: this.modalText
            },
          }
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
          textNode
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
      }
    }
  }
</script>
