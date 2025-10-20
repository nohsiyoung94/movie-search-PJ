exports.handler = async function(event, context) {
    return {
        statusCode : 200,
        body : JSON.stringify({
            name : 'shtldud',
            age : 32,
            email : 'shtldud@naver.com'
        })
    }
}