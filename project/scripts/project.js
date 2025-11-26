

async function getData(){
    let res = await fetch("https://api.congress.gov/v3/member/congress/118/TX?currentMember=true&api_key=MU8Hk6TRYyvjDMTGmB9qfcLw22eVcfz5nfI18oPQ&limit=250")

    

    let data = await res.json()

    // console.log(JSON.stringify(data))
    console.log(data)

}


getData()