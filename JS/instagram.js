async function instagramFollowers () {
    
    const followers = []
    
    try {
        const userInfoSource = await Axios.get('https://www.instagram.com/VitcorLF/')

        
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

        const userInfo = JSON.parse(jsonObject)
       
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
        for (let media of mediaArray) {
            const node = media.node
            
            followers.push(node.thumbnail_src)
        }
    } catch (e) {
        console.error('Unable to retrieve Followers. Reason: ' + e.toString())
    }
    
    return followers
}