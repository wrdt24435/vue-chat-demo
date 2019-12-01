var app = new Vue({
    el: '#container',
    data: {
        inputvalue: "",
        chatlist:[ ]
    },
    methods: {
        sendchat() {   
            this.chatlist.push(
                {message : this.inputvalue}
            )
        
            $.ajax({
                url: "http://www.tuling123.com/openapi/api",
                type: 'post',
                data: {
                    key: 'd7c82ebd8b304abeacc73b366e42b9ed',
                    info: this.inputValue
                },
                success: (backData) => {
                    this.chatlist.push(
                        {message : backData.text}
                    )
                    // console.log(backData);
                }
            })
        }
    },
    updated() {
        $('.chat').scrollTop(9999)
    }
})