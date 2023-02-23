
class Requests{
        async post(data) {
            let access_key = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481"
            
            const translate = await fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + access_key + "&text="+ data + "&lang=en")
                
           
            const result = await translate.json()
            
            result.code == 415 ? console.log("Aylık deneme limitine ulaşıldı") : console.log("deneme123")
            console.log("deneme")
            }


    }
const request = new Requests()

request.post("deneme")
    