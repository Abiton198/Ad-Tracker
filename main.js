const adData = {
    facebook: {
        site: 'facebook',
        adViews: 23400,
        clicks: 510,
        conversions: 50,
    },
    twitter: {
        site: 'twitter',
        adViews: 23400,
        clicks: 1192,
        conversions: 91,
    },
    instagram: {
        site: 'instagram',
        adViews: 23400,
        clicks: 2100,
        conversions: 200,
    }
}

// class constructors(begins with a capital letter); nests a constructor(takes data as a parameter)

class AdvertsingChannel{
    constructor(data){
    Object.assign(this, data)
    this.conversionRate = (this.conversions / this.clicks * 100).toFixed(1)
    }

    getAdvertsingChannelHtml(){
        const{site, adViews, clicks, conversions} = this
        return `<div class="site"> ${site}</div>
                <div>Views: ${adViews}</div>
                <div>Clicks: ${clicks}</div>
                <div>Conversions: ${conversions}</div>
                <div>Conv. Rate: <span class="highlight">${this.conversionRate} %</span></div>`
    }
}

const facebook = new AdvertsingChannel(adData.facebook)
const twitter = new AdvertsingChannel(adData.twitter)
const instagram = new AdvertsingChannel(adData.instagram)

document.getElementById("fb").innerHTML = facebook.getAdvertsingChannelHtml()
document.getElementById("twit").innerHTML = twitter.getAdvertsingChannelHtml()
document.getElementById("insta").innerHTML = instagram.getAdvertsingChannelHtml()