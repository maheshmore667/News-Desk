import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class NewsSection extends Component {
  articles = [
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Mariella Moon",
      "title": "White House proposes 30 percent tax on electricity used for crypto mining",
      "description": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
      "url": "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
      "publishedAt": "2023-05-03T09:03:42Z",
      "content": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]"
    },
    {
      "source": { "id": "wired", "name": "Wired" },
      "author": "Jessica Maddox",
      "title": "The Hidden Dangers of the Decentralized Web",
      "description": "From social networks to crypto, independently run servers are being touted as a solution to the internet’s problems. But they’re far from a magic bullet.",
      "url": "https://www.wired.com/story/the-hidden-dangers-of-the-decentralized-web/",
      "urlToImage": "https://media.wired.com/photos/6466a28c9ec11a2433532a66/191:100/w_1280,c_limit/Cons_Social.jpg",
      "publishedAt": "2023-05-19T12:00:00Z",
      "content": "When Elon Musk took over Twitter last year, many users migrated to the free and open-source platform Mastodon. Mastodon, like other decentralized social media, isnt owned by one of the major players … [+4331 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Nikki Main",
      "title": "Hacker Pleads Guilty to Hijacking Barack, Elon, and Kim K's Twitter Accounts",
      "description": "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts. Joseph James O’Connor, 23, was extradited to the U.S. from …",
      "url": "https://gizmodo.com/hacker-twitter-joseph-james-o-connor-bitcoin-crypto-1850423510",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg",
      "publishedAt": "2023-05-10T15:51:00Z",
      "content": "A man accused of hacking Twitter accounts in a Bitcoin scheme pleaded guilty on Tuesday for his role in cyber stalking and computer hacking that exploited numerous high-profile social media accounts.… [+3186 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Cryptoverse: Busy bitcoin births new breed of crypto - Reuters",
      "description": "Cryptoverse: Busy bitcoin births new breed of crypto  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYnVzeS1iaXRjb2luLWJpcnRocy1uZXctYnJlZWQtY3J5cHRvLTIwMjMtMDUtMjMv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-23T05:12:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Binance Australia customers seen selling bitcoin at a discount - Reuters",
      "description": "Binance Australia customers seen selling bitcoin at a discount  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYmluYW5jZS1hdXN0cmFsaWEtY3VzdG9tZXJzLXNlZW4tc2VsbGluZy1iaXRjb2luLWRpc2NvdW50LXJpdmFsLWV4Y2hhbmdlcy0yMDIzLTA1LTMwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-30T09:25:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Crypto stocks fall after Binance halts bitcoin withdrawals for hours - Reuters",
      "description": "Crypto stocks fall after Binance halts bitcoin withdrawals for hours  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1mYWxsLWFmdGVyLWJpbmFuY2UtaGFsdHMtYml0Y29pbi13aXRoZHJhd2Fscy1ob3Vycy0yMDIzLTA1LTA4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-08T10:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ... - Reuters",
      "description": "Cboe files with U.S. SEC for third time to list ARK 21Shares Bitcoin ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvY2JvZS1maWxlcy13aXRoLXVzLXNlYy10aGlyZC10aW1lLWxpc3QtYXJrLTIxc2hhcmVzLWJpdGNvaW4tZXRmLTIwMjMtMDUtMDkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-09T19:36:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Liechtenstein to allow payment for certain state services in Bitcoin ... - Reuters",
      "description": "Liechtenstein to allow payment for certain state services in Bitcoin ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvbGllY2h0ZW5zdGVpbi1hbGxvdy1wYXltZW50LWNlcnRhaW4tc3RhdGUtc2VydmljZXMtYml0Y29pbi1oYW5kZWxzYmxhdHQtMjAyMy0wNS0wOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-05-08T11:43:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Kyle Barr",
      "title": "Failed Terra Founder Do Kwon, Who Avoided Police for Months, Gets Bail",
      "description": "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Montenegro for allegedly holding two fake passports. None of that wa…",
      "url": "https://gizmodo.com/terra-luna-do-kwon-crypto-bitcoin-stablecoin-1850431578",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/462c69a5bb4faf493bbdeed0af3fdb8d.jpg",
      "publishedAt": "2023-05-12T13:33:59Z",
      "content": "Former Terraform Labs CEO Do Kwon, alongside his compatriot and former chief financial officer Han Chong-joon have been on the run from international police for months. They were arrested in Monteneg… [+2345 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Emma Roth",
      "title": "‘PlugwalkJoe’ pleads guilty for the massive 2020 Twitter hack and other crimes",
      "description": "PlugwalkJoe, aka Joseph James O’Connor, a UK citizen connected to the 2020 Twitter hack affecting many high-profile accounts, has pled guilty to cyberstalking and other crimes.",
      "url": "https://www.theverge.com/2023/5/9/23717558/plugwalkjoe-pleads-guilty-twitter-hack-other-crimes-tiktok",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/drbaTsgNPxqzrT5M0V6vKOE49Ug=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23926010/acastro_STK050_01.jpg",
      "publishedAt": "2023-05-09T21:57:19Z",
      "content": "PlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\nPlugwalkJoe pleads guilty for the massive 2020 Twitter hack and other crimes\r\n / The hack compromised numerous high-profi… [+1865 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "jma@insider.com (Jason Ma)",
      "title": "Bitcoin gets vote of confidence as a long-term store of value as Tether says it will buy more of the crypto to back its stablecoin",
      "description": "Tether said that starting this month it will regularly allocate up to 15% of its net realized operating profits toward buying bitcoin.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-long-term-value-tether-btc-purchases-usdt-stablecoin-reserves-2023-5",
      "urlToImage": "https://i.insider.com/646507e00d92400018e6d690?width=1200&format=jpeg",
      "publishedAt": "2023-05-17T17:12:42Z",
      "content": "Bitcoin got a vote of confidence as a long-term store of value after Tether said Wednesday it will buy more of the crypto to back its stablecoin.\r\nThe issuer of USDT said it will allocate up to 15% o… [+1324 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "Bitcoin could more than double and hit a new record high next year as the token sees a big shakeup, blockchain exec says",
      "description": "\"When bitcoin's halving kicks in a year from now, we'll likely be well on our way past the previous all-time high.\"",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-bank-crisis-recession-halving-fed-rate-cut-2023-5",
      "urlToImage": "https://i.insider.com/64545b09dcb78700180cfa77?width=1200&format=jpeg",
      "publishedAt": "2023-05-06T10:30:08Z",
      "content": "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could hit a new record high next year, said Bob Ras, cofounder of blockchain firm Sologenic.</li>\n<li>He cited bitcoin halving, which will reduce minin… [+3236 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "Bitcoin is on track for its first monthly drop of the year, stalling 2023's huge rally as macro uncertainty builds",
      "description": "Bitcoin has slipped in May, but is still up big in 2023. Market experts say the rally has taken a breather as traders assess the macro picture.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-ethereum-solana-inflation-recession-risks-2023-5",
      "urlToImage": "https://i.insider.com/64773e96df2567001837d157?width=1200&format=jpeg",
      "publishedAt": "2023-05-31T15:39:01Z",
      "content": "Bitcoin is still up largely since the start of 2023, however, surging 65% year-to-date.Umit Turhan Coskun/Getty Images\r\n<ul>\n<li>Bitcoin is down about 4% in May, heading for its first monthly loss of… [+3758 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Asia Martin",
      "title": "'AI' is trending in Google searches — but it's not yet to the peak reached by Bitcoin in 2017",
      "description": "Interest in AI is at an all-time high on Google searches, an Alliance Bernstein analyst notes. But it's still not as popular as Bitcoin at its height.",
      "url": "https://www.businessinsider.com/ai-trending-google-search-bitcoin-metaverse-chatgpt-artificial-intelligence-2023-5",
      "urlToImage": "https://i.insider.com/6477bb1b085acb0018ff14ed?width=1200&format=jpeg",
      "publishedAt": "2023-06-01T21:00:21Z",
      "content": "Google searches for \"AI\" haven't matched the peak seen for \"Bitcoin\" at the height of its search popularity.Beata Zawrzel/NurPhoto via Getty Images\r\n<ul>\n<li>\"AI\" is trending in Google searches, but … [+2013 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Deanna Ritchie",
      "title": "Altcoins: Exploring the Best Cryptocurrencies Beyond BTC",
      "description": "The world of cryptocurrencies goes beyond Bitcoin (BTC), with a plethora of alternatives offering unique features, use cases, and potential for growth. If you’re looking to diversify your crypto portfolio or explore beyond Bitcoin, this article provides an in…",
      "url": "https://readwrite.com/bitcoin-alternatives-exploring-the-best-altcoin-cryptocurrencies-beyond-btc/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/05/pexels-rdne-stock-project-8370757.jpg",
      "publishedAt": "2023-05-28T21:00:56Z",
      "content": "The world of cryptocurrencies goes beyond Bitcoin (BTC), with a plethora of alternatives offering unique features, use cases, and potential for growth. If you’re looking to diversify your crypto port… [+7977 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Zinya Salfiti",
      "title": "Bitcoin is a bubble with 'no inherent value and is terribly overpriced,' top economist Steve Hanke says",
      "description": "\"Bitcoin is a bubble. It has no inherent value and is terribly overpriced,\" the top economist tweeted.",
      "url": "https://markets.businessinsider.com/news/currencies/steve-hanke-bitcoin-bubble-overpriced-worthless-value-rally-cryptocurrency-crypto-2023-5",
      "urlToImage": "https://i.insider.com/646211685cd814001883cf58?width=1200&format=jpeg",
      "publishedAt": "2023-05-15T14:52:27Z",
      "content": "BitcoinYuichiro Chino/Getty Images\r\n<ul>\n<li>Top economist Steve Hanke reiterated that the world's most popular cryptocurrency is essentially worthless. </li>\n<li>He was reacting to bitcoin falling t… [+1936 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Zinya Salfiti",
      "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns the economy is headed for 'crash landing' - says investors should buy bitcoin, gold",
      "description": "Robert Kiyosaki warned the US economy is heading for a severe downturn, saying investors should buy bitcoin, gold and silver.",
      "url": "https://markets.businessinsider.com/news/currencies/rich-dad-poor-dad-author-robert-kiyosaki-crash-bitcoin-gold-2023-5",
      "urlToImage": "https://i.insider.com/646731d1cd3a9c0019184af1?width=1200&format=jpeg",
      "publishedAt": "2023-05-19T09:54:10Z",
      "content": "Robert Kiyosaki.Courtesy of Robert Kiyosaki\r\n<ul>\n<li>Robert Kiyosaki warned that the US economy is heading for a severe downturn.</li>\n<li>The \"Rich Dad Poor Dad\" author touted bitcoin, silver and g… [+1835 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "Bitcoin is on a tear in 2023. Here's where 4 crypto pros see the coin headed by the end of the year.",
      "description": "One crypto startup exec told Insider that bitcoin can't hit a record high until US inflation is finally under control.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-prediction-crypto-market-outlook-halving-blockchain-inflation-cryptocurrency-2023-5",
      "urlToImage": "https://i.insider.com/6470ff66085acb0018feb4fa?width=1200&format=jpeg",
      "publishedAt": "2023-05-28T12:30:07Z",
      "content": "One exec told Insider that bitcoin can't hit a record high until US inflation is under control.Yuichiro Chino/Getty Images\r\n<ul>\n<li>Bitcoin has jumped over 60% year-to-date, paring losses from a bru… [+4067 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "Bitcoin's 72% rally to start 2023 helps push Michael Saylor's MicroStrategy to its first profitable quarter in over 2 years",
      "description": "The company is the largest holder of bitcoin, and added 7,500 bitcoins in the first quarter of the year, bringing its total to 140,000 tokens.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-michael-saylor-bull-quarter-cryptocurrency-rally-crypto-70-2023-5",
      "urlToImage": "https://i.insider.com/60ca262123393a00188e3872?width=1200&format=jpeg",
      "publishedAt": "2023-05-02T15:43:05Z",
      "content": "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy posted its first profit in nine quarters to start 2023.</li>\n<li>The largest holder of bitcoin added 7… [+1863 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Zinya Salfiti",
      "title": "Bitcoin's 73% rally is fueling optimism the crypto winter is ending. Here are fresh forecasts on the token from StanChart, Matrixport and others.",
      "description": "Bitcoin has rallied 73% this year, after a grim 2022. Some analysts are predicting this may be just the beginning of a bigger advance.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-predictions-crypto-forecasts-robert-kiyosaki-standard-chartered-matrixport-analysts-2023-5",
      "urlToImage": "https://i.insider.com/62a76660a464ed0019584a3b?width=1200&format=jpeg",
      "publishedAt": "2023-05-03T13:48:14Z",
      "content": "Bitcoin.Getty Images\r\n<ul>\n<li>Bitcoin has rallied more than 70% this year, outperforming most other asset classes, after a dismal 2022. </li>\n<li>Some analysts are predicting this may just be the st… [+5150 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Filip De Mott,Zinya Salfiti",
      "title": "Bitcoin's huge rally is masking a drop in liquidity as smaller trades move the market",
      "description": "A trade of 462 bitcoins can move the price by 1% compared to more than 1,400 bitcoins in January, according to CCData.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-rally-crypto-liquidity-market-moving-small-trades-btc-2023-5",
      "urlToImage": "https://i.insider.com/6453aacdb4a8cd00187ab9e5?width=1200&format=jpeg",
      "publishedAt": "2023-05-04T15:30:28Z",
      "content": "(Photo by Jakub Porzycki/NurPhoto via Getty Images)\r\n<ul>\n<li>Bitcoin's huge price rally this year is masking a decline in market liquidity.</li>\n<li>That means smaller bitcoin trades can have a bigg… [+1766 chars]"
    },
    {
      "source": { "id": null, "name": "Slashdot.org" },
      "author": "msmash",
      "title": "Balaji Srinivasan Closes Out $1 Million Bitcoin Bet Early",
      "description": "Balaji Srinivasan, the former chief technology officer of Coinbase Global, said he closed out what appeared to be a losing bet that Bitcoin would rise to $1 million within 90 days. From a report: Srinivasan said he gave $1 million to two organizations, includ…",
      "url": "https://slashdot.org/story/23/05/03/1924216/balaji-srinivasan-closes-out-1-million-bitcoin-bet-early",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-05-03T21:20:00Z",
      "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Theron Mohamed",
      "title": "Nobel economist Paul Krugman slams crypto as mostly useless, after saying it's hugely overpriced and helps criminals",
      "description": "Paul Krugman said bitcoin and other tokens serve little purpose, warned of a \"crypto bubble,\" and noted the industry has a dark side.",
      "url": "https://markets.businessinsider.com/news/currencies/paul-krugman-crypto-bitcoin-price-bubble-crime-cbdc-desantis-banks-2023-5",
      "urlToImage": "https://i.insider.com/640f05c9340fa00018fdae3c?width=1200&format=jpeg",
      "publishedAt": "2023-05-30T14:53:52Z",
      "content": "Paul Krugman.REUTERS/Brendan McDermid\r\n<ul>\n<li>Paul Krugman says crypto is mostly useless, overvalued, and appeals to bank skeptics and criminals.</li>\n<li>The Nobel Prize-winning economist flagged … [+2018 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "Bitcoin has bottomed and the world's biggest cryptocurrency is on a new bull run, MicroStrategy's Michael Saylor says",
      "description": "\"I think bitcoin's found the bottom. I think the leverage is out of it,\" MicroStrategy cofounder Michael Saylor said.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-bull-market-outlook-microstrategy-michael-saylor-ethereum-2023-5",
      "urlToImage": "https://i.insider.com/631133643fe7c40019e4f2fd?width=1200&format=jpeg",
      "publishedAt": "2023-05-22T16:19:20Z",
      "content": "MicroStrategy's Michael Saylor says bitcoin's price has bottomed.Marco Bello/Getty Images\r\n<ul>\n<li>MicroStrategy's Michael Saylor says bitcoin's price has bottomed.</li>\n<li>Crypto regulation will s… [+2765 chars]"
    },
    {
      "source": { "id": null, "name": "Hipertextual" },
      "author": "Luis Miranda",
      "title": "Totalplay ya acepta Bitcoin como forma de pago",
      "description": "Totalplay añadió el Bitcoin como una forma de pago para sus paquetes de cable, telefonía e internet. Grupo Salinas firmó un acuerdo con IBEX Mercado, un proveedor de servicios de pago de Bitcoin Lightning, el cual beneficiará a más cuatro millones de mexicano…",
      "url": "http://hipertextual.com/2023/05/totalplay-bitcoin-forma-de-pago",
      "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/05/bitcoin-pago-totalplay.jpg?fit=2000%2C1250&quality=50&strip=all&ssl=1",
      "publishedAt": "2023-05-19T19:20:00Z",
      "content": "Totalplay añadió el Bitcoin como una forma de pago para sus paquetes de cable, telefonía e internet. Grupo Salinas firmó un acuerdo con IBEX Mercado, un proveedor de servicios de pago de Bitcoin Ligh… [+2591 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "The US is losing the bitcoin movement because of regulation, Cathie Wood says",
      "description": "\"It would be nice if the US were leading this movement, but we're losing it because of our regulatory system.\"",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-btc-price-us-regulation-sec-cathie-wood-ark-coinbase-2023-5",
      "urlToImage": "https://i.insider.com/639c6bd0b7e0f20018095236?width=1200&format=jpeg",
      "publishedAt": "2023-05-25T15:21:55Z",
      "content": "ARK Invest founder Cathie Wood.Photo by PATRICK T. FALLON/AFP via Getty Images\r\n<ul>\n<li>The US is losing out on the bitcoin movement, according to Ark Invest's Cathie Wood.</li>\n<li>The vocal bull o… [+2206 chars]"
    },
    {
      "source": { "id": "wired", "name": "Wired" },
      "author": "Lily Hay Newman",
      "title": "Netflix’s Password-Sharing Crackdown Has Hit the US",
      "description": "TikTok user data is exposed to Chinese ByteDance employees, a screen recording app goes rogue in Google Play, and privacy groups want Slack to expand encryption.",
      "url": "https://www.wired.com/story/netflix-password-sharing/",
      "urlToImage": "https://media.wired.com/photos/6470f77482d37ced55dff512/191:100/w_1280,c_limit/Security-News-This-Week--Netflix%E2%80%99s-Password-Sharing-Crackdown-Has-Hit-the-US-Security-GettyImages-1262044708.jpg",
      "publishedAt": "2023-05-27T13:00:00Z",
      "content": "Officials in Spain want to ban end-to-end encryption in the European Union, according to a leaked government document obtained by WIRED. The stance emerged as part of a survey of EU member states rel… [+3440 chars]"
    },
    {
      "source": { "id": "wired", "name": "Wired" },
      "author": "Nabeel S. Qureshi",
      "title": "Waluigi, Carl Jung, and the Case for Moral AI",
      "description": "Nintendo's Luigi has a chaos-causing alter ego. AI's shadow could put humanity at risk—but can be contained.",
      "url": "https://www.wired.com/story/waluigi-effect-generative-artificial-intelligence-morality/",
      "urlToImage": "https://media.wired.com/photos/646e9bd40124a91cee27d937/191:100/w_1280,c_limit/Wa_5.jpg",
      "publishedAt": "2023-05-25T10:00:00Z",
      "content": "In the early 20th century, the psychoanalyst Carl Jung came up with the concept of the shadowthe human personalitys darker, repressed side, which can burst out in unexpected ways. Surprisingly, this … [+3734 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "Galaxy Digital CEO Mike Novogratz says the 'dog days of summer' came early for crypto as bitcoin posts worst month since November",
      "description": "\"The dog days of summer started early in crypto,\" Galaxy Digital's Mike Novogratz said. \"That doesn't make me thrilled.\"",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-mike-novogratz-galaxy-digital-2023-6",
      "urlToImage": "https://i.insider.com/5f92fdd5abcd0c0018d695d1?width=1200&format=jpeg",
      "publishedAt": "2023-06-01T16:49:39Z",
      "content": "Mike Novogratz.Lucas Jackson/Reuters\r\n<ul>\n<li>The crypto market rally seems to be stalling as bitcoin notched its first monthly loss since November.</li>\n<li>Galaxy Digital CEO Mike Novogratz explai… [+1510 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "US stocks jump as markets brace for May jobs report and debt ceiling bill nears finish line",
      "description": "The May employment report will be released on Friday, one of the last big pieces of economic data before the Fed's next policy meeting.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-may-jobs-report-debt-ceiling-bill-2023-6",
      "urlToImage": "https://i.insider.com/5bbf4f2e92b36954b66f60a3?width=1200&format=jpeg",
      "publishedAt": "2023-06-01T20:05:06Z",
      "content": "Traders and financial professionals work ahead of the closing bell on the floor of the New York Stock Exchange (NYSE), June 15, 2018 in New York City.Drew Angerer/Getty\r\n<ul>\n<li>US stocks rose Thurs… [+2688 chars]"
    },
    {
      "source": { "id": null, "name": "Hackaday" },
      "author": "Tom Nardi",
      "title": "Home Heating With Bitcoin Miners is Now a Real Thing",
      "description": "If you were reading this post a month ago, you could have been forgiven for thinking it was an April Fools post. But we assure you, this is no joke. A company called HeatBit has recently opened pre…",
      "url": "https://hackaday.com/2023/05/13/home-heating-with-bitcoin-miners-is-now-a-real-thing/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2023/05/heatbit_feat.jpg",
      "publishedAt": "2023-05-13T20:00:39Z",
      "content": "If you were reading this post a month ago, you could have been forgiven for thinking it was an April Fools post. But we assure you, this is no joke. A company called HeatBit has recently opened preor… [+3025 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Pete Syme",
      "title": "Man pleads guilty to hacking Elon Musk's and Joe Biden's Twitter accounts in bitcoin scam",
      "description": "Joseph James O'Connor was part of a group that hijacked several high-profile Twitter accounts in 2020.",
      "url": "https://www.businessinsider.com/twitter-bitcoin-scam-elon-musk-joe-biden-man-pleads-guilty-2023-5",
      "urlToImage": "https://i.insider.com/645b5461c726bc00196aad78?width=1200&format=jpeg",
      "publishedAt": "2023-05-10T10:21:25Z",
      "content": "Elon Musk's Twitter account, and Joseph James O'Connor arrested in Spain in 2021.Matt Cardy/Getty Images; REUTERS/Jon Nazca\r\n<ul>\n<li>Several high-profile Twitter accounts were hacked as part of a bi… [+2430 chars]"
    },
    {
      "source": { "id": null, "name": "Xataka.com" },
      "author": "Enrique Pérez",
      "title": "Binance ha paralizado los retiros de Bitcoin. No es puntual, la criptomoneda vive una tensión sin precedentes",
      "description": "El exchange más grande del mundo ha decidido suspender los retiros de Bitcoin. La explicación oficial la ha proporcionado la propia Binance, quien explica que ha cerrado las retiradas debido a un \"largo volumen de transacciones pendientes\". No es un hecho pun…",
      "url": "https://www.xataka.com/criptomonedas/binance-ha-paralizado-retiros-bitcoin-no-puntual-criptomoneda-vive-tension-precedentes",
      "urlToImage": "https://i.blogs.es/33e784/binance/840_560.jpeg",
      "publishedAt": "2023-05-08T09:00:33Z",
      "content": "El exchange más grande del mundo ha decidido suspender los retiros de Bitcoin. La explicación oficial la ha proporcionado la propia Binance, quien explica que ha cerrado las retiradas debido a un \"la… [+2397 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Deanna Ritchie",
      "title": "How to Avoid Bankruptcy in Crypto",
      "description": "You can win or lose whenever you place a bet at a crypto casino. Most players tend to go bankrupt when they fail to practice responsible gaming. It’s no shocker that many players often wager more when they lose because they feel they will likely win the next …",
      "url": "https://readwrite.com/how-to-avoid-bankruptcy-in-crypto/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/05/bankruptcy-in-crypto.jpg",
      "publishedAt": "2023-05-30T20:00:40Z",
      "content": "You can win or lose whenever you place a bet at a crypto casino. Most players tend to go bankrupt when they fail to practice responsible gaming. Its no shocker that many players often wager more when… [+5889 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Turkey election: Kremlin rejects accusations of interference",
      "description": "Opposition candidate Kemal Kilicdaroglu said Russia was behind \"montages and deep fake content\".",
      "url": "https://www.bbc.co.uk/news/world-europe-65574312",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12071/production/_129714837_f65bd39a0593a238873aa5ccd9e05130ab0f5b290_0_5500_36671000x667.jpg",
      "publishedAt": "2023-05-12T16:20:23Z",
      "content": "The Kremlin has denied interfering in Turkey's elections after the opposition candidate, Kemal Kilicdaroglu, accused Russia of \"meddling\".\r\nSpokesman Dmitry Peskov said Russians did not interfere in … [+2330 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Mat Smith",
      "title": "The Morning After: White House proposes a 30 percent tax on electricity used for crypto mining",
      "description": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax crypto-mining companies because they aren't paying for the \"f…",
      "url": "https://www.engadget.com/the-morning-after-white-house-proposes-a-30-percent-tax-on-electricity-used-for-crypto-mining-095933394.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/WT0rf.kcraACXJO_L1CMOg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/77b3f5d0-e9ad-11ed-b6dd-8ea4ea1b0a6b.cf.jpg",
      "publishedAt": "2023-05-04T09:59:33Z",
      "content": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax c… [+3753 chars]"
    },
    {
      "source": { "id": null, "name": "Xataka.com" },
      "author": "Enrique Pérez",
      "title": "El Bitcoin necesita ayuda: su futuro pasa por las manos de cuatro programadores y cada vez están más quemados",
      "description": "Tras más de nueve años como principal desarrollador, Van der Laan abandonó el repositorio de Bitcoin Core en Github el pasado mes de febrero. No solo fue una pérdida de gran calado, también es representación del estado actual de la red principal de Bitcoin. A…",
      "url": "https://www.xataka.com/criptomonedas/bitcoin-necesita-ayuda-su-futuro-pasa-manos-cuatro-programadores-cada-vez-estan-quemados",
      "urlToImage": "https://i.blogs.es/a7e1d3/bitcoin-core/840_560.jpeg",
      "publishedAt": "2023-05-07T17:01:12Z",
      "content": "Tras más de nueve años como principal desarrollador, Van der Laan abandonó el repositorio de Bitcoin Core en Github el pasado mes de febrero. No solo fue una pérdida de gran calado, también es repres… [+5298 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Kyle Barr",
      "title": "FTX’s Dr. Frankenstein Tries to Revive Dead Crypto Exchange",
      "description": "Other than Terra, FTX is perhaps the biggest synonym for failure in the crypto industry. It’s a three-letter word dragged so far through the mud that it’s hard to distinguish it from a cow patty. Yet enough people working at the exchange think people would be…",
      "url": "https://gizmodo.com/ftx-sam-bankman-fried-crypto-1850467212",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/000a22167a4653aa27d08be49a865b56.jpg",
      "publishedAt": "2023-05-23T21:16:31Z",
      "content": "Other than Terra, FTX is perhaps the biggest synonym for failure in the crypto industry. Its a three-letter word dragged so far through the mud that its hard to distinguish it from a cow patty. Yet e… [+2955 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "US stocks trade mixed as markets await debt ceiling talks between Biden and lawmakers",
      "description": "President Biden will resume debt ceiling talks with House Speaker Kevin McCarthy and other congressional leaders at 5:30pm ET on Monday.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-debt-ceiling-talks-biden-mccarthy-default-2023-5",
      "urlToImage": "https://i.insider.com/646bc3332e229f0018268d83?width=1200&format=jpeg",
      "publishedAt": "2023-05-22T20:06:12Z",
      "content": "House Speaker Kevin McCarthy.Anna Moneymaker/Getty Images\r\n<ul>\n<li>US stocks traded mixed on Monday ahead of debt ceiling talks with President Biden and lawmakers.</li>\n<li>The US has less than a mo… [+2384 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "George Glover",
      "title": "Galaxy Digital will move more of its operations offshore because of a 'regulatory headache' in the US, billionaire crypto bull Mike Novogratz says",
      "description": "\"We still have a hangover … from the denting of trust that FTX and other bad actors in the space created,\" Novogratz told analysts on Tuesday.",
      "url": "https://markets.businessinsider.com/news/currencies/billionaire-crypto-investor-mike-novogratz-galaxy-digital-offshore-bitcoin-regulation-2023-5",
      "urlToImage": "https://i.insider.com/6138995c2534ab0018534131?width=1200&format=jpeg",
      "publishedAt": "2023-05-10T11:38:28Z",
      "content": "Galaxy Digital will move more of its crypto operations offshore, billionaire investor Mike Novogratz said Tuesday.Lucas Jackson/Reuters\r\n<ul>\n<li>Galaxy Digital will move more of its operations offsh… [+2292 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Aaron McDade",
      "title": "Secret crypto holdings are becoming an increasingly common conflict in divorces, attorneys say",
      "description": "As crypto has become more popular, hidden investments also have caused more problems for divorce attorneys working to divide assets.",
      "url": "https://www.businessinsider.com/crypto-divorce-fights-financial-infidelity-hidden-investments-attorneys-say-2023-5",
      "urlToImage": "https://i.insider.com/646910d563c86a0018cd07ba?width=1200&format=jpeg",
      "publishedAt": "2023-05-20T19:16:47Z",
      "content": "Crypto, and especially hidden crypto investments, have become an increasing conflict in divorces.Wenjin Chen/Getty Images\r\n<ul>\n<li>Cryptocurrency is complicating an increasing amount of divorces, a … [+2418 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Max Zahn",
      "title": "Bitcoin has climbed 65% this year despite crypto woes. Experts explain why.",
      "description": "The digital currency benefited from a shift to well-known coins, experts said.",
      "url": "https://abcnews.go.com/Business/bitcoin-climbed-65-year-despite-crypto-woes-experts/story?id=99252922",
      "urlToImage": "https://s.abcnews.com/images/Business/bitcoin-1-rt-er-230511_1683820816546_hpMain_16x9_992.jpg",
      "publishedAt": "2023-05-12T09:16:52Z",
      "content": "The cryptocurrency industry, in recent months, has suffered some blows: high-profile bankruptcies, the arrest of wunderkind Sam Bankman-Fried and a regulator lawsuit against top crypto exchange Binan… [+4192 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Joel Comm",
      "title": "How to Beat the Crypto Tax Crisis",
      "description": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night. The CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being arrested by the IRS. The client wasn’t a crypto trader. He hadn…",
      "url": "https://readwrite.com/how-to-beat-the-crypto-tax-crisis/",
      "urlToImage": "https://images.readwrite.com/wp-content/uploads/2022/10/Buying-and-Selling-Cryptocurrency.jpg",
      "publishedAt": "2023-05-03T12:00:44Z",
      "content": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night.\r\nThe CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being ar… [+5069 chars]"
    },
    {
      "source": { "id": null, "name": "Xataka.com" },
      "author": "Enrique Pérez",
      "title": "El gran secreto de Bután: han estado minando Bitcoin silenciosamente en el Himalaya durante años",
      "description": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa principalmente en el turismo, pero desde hace años han estado traba…",
      "url": "https://www.xataka.com/criptomonedas/gran-secreto-butan-han-estado-minando-bitcoin-silenciosamente-himalaya-durante-anos",
      "urlToImage": "https://i.blogs.es/726e7b/butan-templo/840_560.jpeg",
      "publishedAt": "2023-05-02T16:30:37Z",
      "content": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa princip… [+2656 chars]"
    },
    {
      "source": { "id": "the-next-web", "name": "The Next Web" },
      "author": "Thomas Macaulay",
      "title": "Crypto has ‘no intrinsic value’ and ‘no useful social purpose,’ say lawmakers",
      "description": "The crackdown on cryptocurrency escalated today after lawmakers called for consumer trading to be regulated like gambling. In a new report by a cross-party committee, British politicians claimed the likes of Bitcoin and Ether have “no intrinsic value” and ser…",
      "url": "https://thenextweb.com/news/crypto-no-intrinsic-value-or-useful-social-purposeshould-be-regulated-as-gambling",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F05%2FUntitled-design-2-9.jpg&signature=05fb070e8cfc3fcc454a08f2ff270436",
      "publishedAt": "2023-05-17T10:58:36Z",
      "content": "The crackdown on cryptocurrency escalated today after lawmakers called for consumer trading to be regulated like gambling.\r\nIn a new report by a cross-party committee, British politicians claimed the… [+3380 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Micheal Chukwube",
      "title": "Crypto Investing 101: Tips and Strategies for Maximizing Your Returns",
      "description": "Venturing into the dynamic realm of Cryptocurrency Investing? Cryptocurrencies like Bitcoin have surfaced as a lucrative yet perilous asset class over the decade, offering immense potential returns. But, without the right expertise and tactics, crypto investm…",
      "url": "https://readwrite.com/crypto-investing-101-tips-and-strategies-for-maximizing-your-returns/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/05/Crypto-Investing-101.jpg",
      "publishedAt": "2023-05-31T18:00:44Z",
      "content": "Venturing into the dynamic realm of Cryptocurrency Investing? Cryptocurrencies like Bitcoin have surfaced as a lucrative yet perilous asset class over the decade, offering immense potential returns. … [+8900 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Luke Taylor in Bogotá",
      "title": "How two Colombians were ensnared in Bukele’s gang crackdown in El Salvador",
      "description": "Hoping to find work and prosperity in tech-friendly ‘paradise’, the two men instead found ‘hell’ after being arrested and locked up in squalid prisons for three monthsJose Antonio Potes and his childhood friend Manuel Castrillón travelled to El Salvador hopin…",
      "url": "https://www.theguardian.com/world/2023/may/16/how-two-colombians-were-ensnared-in-bukeles-gang-crackdown-in-el-salvador",
      "urlToImage": "https://i.guim.co.uk/img/media/a87af6fbff20556700e82ed0c1f9ee9cbbfe982e/0_224_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=10785965cd7e3426416f1e47dd68743c",
      "publishedAt": "2023-05-16T09:00:05Z",
      "content": "Jose Antonio Potes and his childhood friend Manuel Castrillón travelled to El Salvador hoping to find the safe, prosperous, tech-friendly paradise that they had heard about in Colombian media.\r\nPresi… [+6460 chars]"
    },
    {
      "source": { "id": null, "name": "Slashdot.org" },
      "author": "BeauHD",
      "title": "OpenAI's Sam Altman Set To Raise $100 Million For Worldcoin",
      "description": "According to the Financial Times, OpenAI CEO Sam Altman is close to raising around $100 million in funding for his Worldcoin cyrpto project. Markets Insider reports: Worldcoin is in advanced talks to raise the cash from both new and existing investors ahead o…",
      "url": "https://slashdot.org/story/23/05/15/2215220/openais-sam-altman-set-to-raise-100-million-for-worldcoin",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-05-16T00:45:00Z",
      "content": "Worldcoin is in advanced talks to raise the cash from both new and existing investors ahead of a potential launch within the next few weeks, the Financial Times said Sunday, citing three people with … [+895 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "George Glover",
      "title": "What is Pepecoin? Everything you need to know about the meme token that notched a $1.6 billion market cap then crashed 70% within days",
      "description": "Like Dogecoin and Shiba Inu, the frog-based cryptocurrency is a meme token that has no use case and trades at a fraction of a cent.",
      "url": "https://markets.businessinsider.com/news/currencies/what-is-pepecoin-pepe-memecoins-dogecoin-shiba-inu-crypto-news-2023-5",
      "urlToImage": "https://i.insider.com/6462178e11971c00188f48b1?width=1200&format=jpeg",
      "publishedAt": "2023-05-15T14:08:28Z",
      "content": "Pro-democracy protesters wearing \"Pepe the Frog\" masks during a march in Hong Kong.AP Photo/Kin Cheung, File\r\n<ul>\n<li>Pepecoin surged to over $1 billion in market value this month, but its price has… [+3537 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "US stocks climb as Wall Street hopes debt ceiling deal is in sight",
      "description": "\"The Bulls are back in the driver's seat on the heels of investor optimism over a likely debt ceiling resolution,\" said one investment executive.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-debt-ceiling-limit-biden-nasdaq-sp500-2023-5",
      "urlToImage": "https://i.insider.com/64676d4dcd3a9c001918519b?width=1200&format=jpeg",
      "publishedAt": "2023-05-19T13:36:37Z",
      "content": "Traders work on the floor of the New York Stock Exchange.Michael M. Santiago/Getty Images\r\n <ul>\n<li>US stocks advanced Friday as investors see the potential for a deal that raises the $31 trillion d… [+2645 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks trade mostly lower as fresh economic data spurs new recession fears",
      "description": "\"Recessions are like this odorless gas. They catch up on you,\" top economist David Rosenberg warned investors on Thursday.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-jobless-claims-spike-reignites-recession-fears-2023-5",
      "urlToImage": "https://i.insider.com/61e706f67c6a200018426a8c?width=1200&format=jpeg",
      "publishedAt": "2023-05-11T20:08:35Z",
      "content": "Photo by Spencer Platt/Getty Images\r\n<ul><li>US stocks were mostly lower on Thursday after weekly jobless claims jumped to the highest level since October 2021.</li><li>Initial jobless claims surged … [+2751 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks dip after renewed banking concerns and rise in jobless claims",
      "description": "So far 90% of S&P 500 companies have reported first-quarter earnings, with 77% beating profit estimates by a median of 8%.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-weekly-unemployment-jobless-claims-jump-2023-5",
      "urlToImage": "https://i.insider.com/6357e18dfc29ff001a5f46dc?width=1200&format=jpeg",
      "publishedAt": "2023-05-11T13:38:34Z",
      "content": "Traders work the floor of the New York Stock Exchange during morning trading on May 05, 2022 in New York City.Michael M. Santiago/Getty\r\n<ul><li>US stocks fell on Thursday after weekly jobless claims… [+2712 chars]"
    },
    {
      "source": { "id": null, "name": "Xataka.com" },
      "author": "Enrique Pérez",
      "title": "Golpe sorpresa de Argentina contra las criptomonedas: ha prohibido a las billeteras ofrecerlas",
      "description": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este tipo de activos, ya que impide su acceso desde un gran número…",
      "url": "https://www.xataka.com/criptomonedas/golpe-sorpresa-argentina-criptomonedas-ha-prohibido-a-billeteras-ofrecerlas",
      "urlToImage": "https://i.blogs.es/a30291/argentina-bitcoin/840_560.jpeg",
      "publishedAt": "2023-05-05T08:12:29Z",
      "content": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este t… [+2220 chars]"
    },
    {
      "source": { "id": null, "name": "Xataka.com" },
      "author": "Enrique Pérez",
      "title": "Ledger era la gran referencia para guardar Bitcoin. Ha decepcionado a todos con un cambio repentino",
      "description": "Ledger ha perdido la confianza de los usuarios. La empresa dedicada a monederos fríos ha decidido lanzar una actualización que directamente va en contra de su filosofía original. Un cambio de estrategia que ha generado muchísimas críticas y muestra lo difícil…",
      "url": "https://www.xataka.com/criptomonedas/ledger-era-gran-referencia-para-guardar-bitcoin-ha-decepcionado-a-todos-cambio-repentino",
      "urlToImage": "https://i.blogs.es/70f47b/ledger/840_560.jpeg",
      "publishedAt": "2023-05-17T12:00:56Z",
      "content": "Ledger ha perdido la confianza de los usuarios. La empresa dedicada a monederos fríos ha decidido lanzar una actualización que directamente va en contra de su filosofía original. Un cambio de estrate… [+2446 chars]"
    },
    {
      "source": { "id": null, "name": "Genbeta.com" },
      "author": "Bárbara Bécares",
      "title": "Solo quedan 4 programadores encargados de los secretos del bitcoin (de los 20 que había hace una década).... y están quemados",
      "description": "Wladimir Van der Laan fue durante 9 años el principal desarrollador del repositorio de Bitcoin Core en Github y decidió abandonar esta posición el pasado mes de febrero y sin nombrar a un sucesor en ese cargo. Antes de él, en menos de dos años, cuatro respons…",
      "url": "https://www.genbeta.com/a-fondo/solo-quedan-4-programadores-encargados-secretos-bitcoin-20-que-habia-hace-decada-estan-quemados",
      "urlToImage": "https://i.blogs.es/21f119/kanchanara-pcmwbd6ufyo-unsplash/840_560.jpeg",
      "publishedAt": "2023-05-08T08:41:51Z",
      "content": "Wladimir Van der Laan fue durante 9 años el principal desarrollador del repositorio de Bitcoin Core en Github y decidió abandonar esta posición el pasado mes de febrero y sin nombrar a un sucesor en … [+4548 chars]"
    },
    {
      "source": { "id": null, "name": "heise online" },
      "author": "Axel Kannenberg",
      "title": "Bitcoin & Co.: EU-Rat stoppt anonyme Kryptozahlungen und Steuerschlupflöcher",
      "description": "Die EU-Staaten haben ein breites Gesetzespaket zur Regulierung von Kryptowerten final angenommen. Auch Steuervermeidung und -betrug sollen erschwert werden.",
      "url": "https://www.heise.de/news/Bitcoin-Co-EU-Rat-stoppt-anonyme-Kryptozahlungen-und-Steuerschlupfloecher-9057677.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/8/9/6/4/4/shutterstock_709061209-930a4263b1a2f4ce.jpg",
      "publishedAt": "2023-05-16T15:52:00Z",
      "content": "Wer in der EU virtuelle Münzen wie Bitcoin, Ethereum oder Ripple verwendet, soll künftig unabhängig vom Transaktionswert grundsätzlich identifiziert werden können. Ein solches Aus für anonyme Zahlung… [+4341 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Peter Rothbart,Angela Fung",
      "title": "Upgrade Card Reviews 2023",
      "description": "Read our Upgrade card reviews and see why these cards are ideal for those who want the flexibility of a credit card and the predictability of a loan.",
      "url": "https://www.businessinsider.com/personal-finance/upgrade-card-reviews",
      "urlToImage": "https://i.insider.com/6453c739dcb78700180cdd87?width=1200&format=jpeg",
      "publishedAt": "2023-05-04T22:10:50Z",
      "content": "Our experts answer readers' credit card questions and write unbiased product reviews (here's how we assess credit cards). In some cases, we receive a commission from our partners; however, our opinio… [+10713 chars]"
    },
    {
      "source": { "id": "the-next-web", "name": "The Next Web" },
      "author": "Siôn Geschwindt",
      "title": "Crypto payments can now be traced like bank transfers under new EU law",
      "description": "The EU Parliament agreed last week on the world’s first comprehensive set of rules to regulate the transfer of cryptocurrencies like Bitcoin, as it looks to crack down on money laundering and illegal transfers in the bloc. From 2024, all crypto transfers, reg…",
      "url": "https://thenextweb.com/news/crypto-payments-can-now-be-traced-like-bank-transfers-under-new-eu-law",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F05%2Fkanchanara-fsSGgTBoX9Y-unsplash-1.jpg&signature=318f95df47d846d6c1a3051a8aee800b",
      "publishedAt": "2023-05-22T12:30:34Z",
      "content": "The EU Parliament agreed last week on the worlds first comprehensive set of rules to regulate the transfer of cryptocurrencies like Bitcoin, as it looks to crack down on money laundering and illegal … [+4249 chars]"
    },
    {
      "source": { "id": null, "name": "Hackaday" },
      "author": "Dan Maloney",
      "title": "Hackaday Podcast 219: Lots of Lasers, Heaps of Ham Radio, and Breaching the Blood Brain Barrier",
      "description": "Elliot and Dan teamed up for the podcast this week, bringing you the week’s sweetest hacks. And news too, as the ESA performed a little percussive maintenance on a Jupiter-bound space probe, …",
      "url": "https://hackaday.com/2023/05/19/hackaday-podcast-219-lots-of-lasers-heaps-of-ham-radio-and-breaching-the-blood-brain-barrier/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2016/05/microphone.jpg",
      "publishedAt": "2023-05-19T16:00:48Z",
      "content": "Elliot and Dan teamed up for the podcast this week, bringing you the week’s sweetest hacks. And news too, as the ESA performed a little percussive maintenance on a Jupiter-bound space probe, and we l… [+934 chars]"
    },
    {
      "source": { "id": null, "name": "MakeUseOf" },
      "author": "Katie Rees",
      "title": "What Are Bitcoin's New BRC-20 Tokens and What Do They Do?",
      "description": "Bitcoin's BRC-20 token standard could revolutionize the Bitcoin blockchain.",
      "url": "https://www.makeuseof.com/what-are-bitcoin-brc-20-tokens/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-eth-coins.jpg",
      "publishedAt": "2023-05-08T12:05:17Z",
      "content": "If you're into Bitcoin, you probably know it's traditionally been a one-asset blockchain. BTC has long been the only cryptocurrency that the Bitcoin blockchain supports—but that is now changing with … [+6164 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "Investors have turned away from a key part of the stock market. Here's why.",
      "description": "Insider's Phil Rosen breaks down the latest in financial news, including why small-cap stocks have fallen out of favor in recent months.",
      "url": "https://www.businessinsider.com/stocks-investors-small-cap-markets-finance-investing-newsletter-debt-ceiling-2023-5",
      "urlToImage": "https://i.insider.com/64651cba0d92400018e6db6a?width=1200&format=jpeg",
      "publishedAt": "2023-05-18T10:10:06Z",
      "content": "Happy Friday eve, readers. Phil Rosen here it's been a busy few days in financial news with Tesla's shareholder meeting, choppy markets, and of course more debt-ceiling meetings.\r\nBut those talks in … [+4944 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "Are we in a recession? Elon Musk says the pile of failed banks proves it.",
      "description": "Insider's Phil Rosen breaks down the latest market developments and the economic outlook of top commentators.",
      "url": "https://www.businessinsider.com/recession-forecast-elon-musk-tesla-larry-summers-treasury-markets-finance-2023-5",
      "urlToImage": "https://i.insider.com/645005d674e9330018efc32f?width=1200&format=jpeg",
      "publishedAt": "2023-05-02T10:16:08Z",
      "content": "Good morning, team. I'm Phil Rosen. If you missed it Monday, regulators seized First Republic Bank and JPMorgan took over the majority of its assets. \r\nShares crashed almost 50% as markets opened and… [+4794 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks climb but head for a weekly loss as investors weigh debt-ceiling talks",
      "description": "President Joe Biden and top lawmakers have postponed a meeting on the debt ceiling until next week.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-debt-ceiling-investors-biden-finance-2023-5",
      "urlToImage": "https://i.insider.com/5f8994639e9fe40019009b41?width=1200&format=jpeg",
      "publishedAt": "2023-05-12T13:38:53Z",
      "content": "Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks climbed Friday, but the major indexes remain on track for a losing week.</li>\n<li>Debt-ceiling talks drag on, and investors are weighing the implications of … [+2351 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "US stocks tumble as investors fret over new bout of banking sector volatility",
      "description": "Banking fears piled up on Thursday, with shares of PacWest and Western Alliance plummeting throughout the trading session.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banking-crisis-volatility-pacwest-western-alliance-2023-5",
      "urlToImage": "https://i.insider.com/5d7faf892e22af1a0454061d?width=1200&format=jpeg",
      "publishedAt": "2023-05-04T20:22:32Z",
      "content": "Worried traderRichard Drew/Associated Press\r\n<ul>\n<li>US stocks slid on Thursday as investors dealt with fresh volatility in bank shares.</li>\n<li>All three indexes ended the day lower, with the Dow … [+1897 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "George Glover",
      "title": "OpenAI chief Sam Altman is close to raising $100 million for his eyeball-scanning Worldcoin crypto project, report says",
      "description": "Worldcoin wants to launch a new cryptocurrency that people would receive in exchange of scans of their irises.",
      "url": "https://markets.businessinsider.com/news/currencies/sam-altman-chatgpt-openai-worldcoin-crypto-startup-investing-news-analysis-2023-5",
      "urlToImage": "https://i.insider.com/6461ee9d11971c00188f461e?width=1200&format=jpeg",
      "publishedAt": "2023-05-15T09:08:21Z",
      "content": "Sam Altman is set to raise $100 million for his crypto project Worldcoin, according to the Financial Times.Lucy Nicholson/Reuters\r\n<ul>\n<li>Sam Altman is close to raising $100 million for Worldcoin, … [+2112 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "US stocks decline as White House, Republicans continue to wrangle over debt ceiling deal",
      "description": "Investors are still waiting for lawmakers to hash out a deal to avoid a US default. Meanwhile, the Nasdaq has notched a 2023 high.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-debt-ceiling-talks-apple-nasdaq-2023-5",
      "urlToImage": "https://i.insider.com/646cb529a739dc0018090061?width=1200&format=jpeg",
      "publishedAt": "2023-05-23T13:36:11Z",
      "content": "A trader works on the floor of the New York Stock Exchange.Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks fell Tuesday as debt-ceiling talks wear on in Washington, DC. </li>\n<li>House Speaker K… [+2197 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "US stocks rise after CPI shows inflation rose at slowest pace in 2 years in April",
      "description": "Stocks bounced up as April CPI data showed inflation clocked in at 4.9%, lower than what was expected by economists.",
      "url": "https://markets.businessinsider.com/news/stocks/stocks-market-news-dow-inflation-cpi-nasdaq-economy-sp500-2023-5",
      "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
      "publishedAt": "2023-05-10T13:38:47Z",
      "content": "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks advanced Wednesday after the April inflation report shows further easing of consumer price pressures. </li>\n<li>Headline CPI rose to 4.9%, coming in below… [+2389 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Filip De Mott",
      "title": "Gold jumps above stocks as Americans' preferred long-term investment while real estate plunges",
      "description": "The share of Americans who view gold as the best long-term investment jumped to 26% this year from 15% in 2022, according to a Gallup poll.",
      "url": "https://markets.businessinsider.com/news/commodities/best-long-term-investment-gold-vs-stocks-real-estate-gallup-2023-5",
      "urlToImage": "https://i.insider.com/645e5473d391de0019bdb1f1?width=1200&format=jpeg",
      "publishedAt": "2023-05-12T16:44:51Z",
      "content": "Stocks to buy before earnings.Caspar Benson/Getty Images\r\n<ul>\n<li>Gold has jumped above stocks as Americans' preferred investment, according to a Gallup survey.</li>\n<li>The share who view gold as t… [+1903 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks trade mixed as Biden and McCarthy are due to meet on debt-ceiling talks",
      "description": "Lawmakers are still scrambling to avoid a national default, and JPMorgan warned Monday that stocks could see a violent re-pricing similar to 2011.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-biden-mccarthy-debt-ceiling-equities-investing-2023-5",
      "urlToImage": "https://i.insider.com/646b68ad12a976001917bac7?width=1200&format=jpeg",
      "publishedAt": "2023-05-22T13:34:21Z",
      "content": "President Joe BidenAlex Wong/Getty Images\r\n<ul>\n<li>US stocks traded mixed Monday, with investors monitoring updates on the latest debt deal talks.</li>\n<li>President Joe Biden and House Speaker Kevi… [+2459 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "US stocks fall after Fed raises rates but points to possible pause on further increases",
      "description": "Hopes for a pivot to rate cuts from the Fed were dampened after Chairman Jerome Powell expressed optimism about avoiding a recession.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-signals-future-rate-hike-pause-2023-5",
      "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
      "publishedAt": "2023-05-03T20:09:56Z",
      "content": "The central bank hiked rates by 25 basis points, as was widely expected.TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks fell on Wednesday as markets digested the latest Fed rate hike of 25 basis points.… [+2212 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "US stocks rise as markets prepare for Fed's next policy decision",
      "description": "Wall Street will be closely watching Fed Chair Jerome Powell's comments for signals of future central bank tightening.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-powell-interest-rate-hike-inflation-2023-5",
      "urlToImage": "https://i.insider.com/6452599df6389a0018ef4781?width=1200&format=jpeg",
      "publishedAt": "2023-05-03T13:38:56Z",
      "content": "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose slightly as traders brace for the Fed's next rate move.</li>\n<li>Markets are pricing in 87%… [+1973 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks slip ahead of debt-ceiling talks as default fears creep into markets",
      "description": "President Joe Biden is set to meet with House Speaker Kevin McCarthy Tuesday afternoon to discuss the looming debt ceiling deadline.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-debt-ceiling-biden-congress-default-2023-5",
      "urlToImage": "https://i.insider.com/645a427a65a21600192fbd36?width=1200&format=jpeg",
      "publishedAt": "2023-05-09T13:38:07Z",
      "content": "Joe Biden speaking at an event on September 16, 2014.AP\r\n<ul>\n<li>US stocks slipped Tuesday as investors watched for updates on the debt ceiling stalemate.</li>\n<li>President Joe Biden and House Spea… [+1952 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "US stocks fall as debt ceiling jitters rattle investors and markets brace for April inflation report",
      "description": "Failing to raise the debt ceiling in time could result in a \"catastrophe\" for the US economy, Treasury Secretary Janet Yellen warned on Monday.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-debt-default-inflation-report-fed-2023-5",
      "urlToImage": "https://i.insider.com/5ec7c331988ee341d61f6164?width=1200&format=jpeg",
      "publishedAt": "2023-05-09T20:06:52Z",
      "content": "Getty Images / Xinhua News Agency\r\n<ul>\n<li>US stocks moved lower on Tuesday amid growing fears of a US debt default.</li>\n<li>President Joe Biden was due to meet top lawmakers to discuss the debt ce… [+2285 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks climb as optimism on debt-ceiling negotiations grows",
      "description": "House Speaker Kevin McCarthy said Tuesday that it's \"possible to get a deal by the end of the week.\"",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-debt-ceiling-optimism-biden-mccarthy-2023-5",
      "urlToImage": "https://i.insider.com/64554a65bcb4870018c7f794?width=1200&format=jpeg",
      "publishedAt": "2023-05-17T13:41:01Z",
      "content": "REUTERS/Brendan McDermid\r\n<ul>\n<li>US stocks moved higher Wednesday as policymakers shared more upbeat comments on the debt-ceiling impasse.</li>\n<li>House Speaker Kevin McCarthy said Tuesday that a … [+2203 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks drop as China's economy continues to weaken while the US debt ceiling deal heads for House vote",
      "description": "May data for China showed softness in manufacturing and services activity, further dashing hopes for a speedy rebound.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-economy-manufacturing-debt-ceiling-vote-2023-5",
      "urlToImage": "https://i.insider.com/64774768df2567001837d1f4?width=1200&format=jpeg",
      "publishedAt": "2023-05-31T13:34:17Z",
      "content": "President Joe Biden.AP Photo/Carolyn Kaster\r\n<ul>\n<li>US stocks fell Wednesday as Chinese manufacturing data showed further weakness.</li>\n<li>China's services sector also cooled off, further deflati… [+2117 chars]"
    },
    {
      "source": { "id": null, "name": "MakeUseOf" },
      "author": "Katie Rees",
      "title": "The 5 Best Bitcoin Ordinal Compatible Wallets",
      "description": "These wallets are the best choices to store your Bitcoin Ordinals.",
      "url": "https://www.makeuseof.com/best-bitcoin-ordinal-compatible-wallets/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/crypto-wallet-pic-1.jpg",
      "publishedAt": "2023-05-03T17:00:16Z",
      "content": "Bitcoin Ordinals have amassed quite a lot of hype since their launch, so it's no surprise that users are looking for wallets in which they can store them. So, what are the best Bitcoin Ordinal-compat… [+5938 chars]"
    },
    {
      "source": { "id": null, "name": "MakeUseOf" },
      "author": "Katie Rees",
      "title": "2 Reasons Bitcoin Transaction Fees Are So High Right Now",
      "description": "Bitcoin transaction fees are soaring once more, but what's behind the sudden rise?",
      "url": "https://www.makeuseof.com/reasons-bitcoin-transaction-fees-are-so-high-right-now/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-graph-1.jpg",
      "publishedAt": "2023-05-05T17:06:17Z",
      "content": "If you conduct a Bitcoin transaction, chances are you'll have to pay a fee. But this fee does not stay at one figure. Bitcoin transaction fees vary all the time and are affected by several factors. A… [+4563 chars]"
    },
    {
      "source": { "id": null, "name": "Genbeta.com" },
      "author": "Bárbara Bécares",
      "title": "Bután lleva años minando bitcoin en el Himalaya en secreto. Por decisión del estado...y piensa seguir",
      "description": "Bután es un pequeño país que suena a idílico por el aura de paz y felicidad que ha vendido su monarquía al mundo, escapando del PIB o Producto Interior Bruto para medir la calidad de vida y optando por medir el bienestar de su pequeña población\r\n con un Índic…",
      "url": "https://www.genbeta.com/actualidad/butan-lleva-anos-minando-bitcoin-himalaya-secreto-decision-estado-piensa-seguir",
      "urlToImage": "https://i.blogs.es/2ac69d/aaron-santelices-zdwvvrdel8a-unsplash/840_560.jpeg",
      "publishedAt": "2023-05-03T08:47:50Z",
      "content": "Bután es un pequeño país que suena a idílico por el aura de paz y felicidad que ha vendido su monarquía al mundo, escapando del PIB o Producto Interior Bruto para medir la calidad de vida y optando p… [+3020 chars]"
    },
    {
      "source": { "id": null, "name": "Everstrike.io" },
      "author": "Andreas Krom",
      "title": "How An Obscure OTC-Traded Derivative From The 80s Took Over Crypto",
      "description": "This is the story of the perpetual future - a financial derivative that went from being an obscure OTC-traded derivative that nobody cared about - to being the largest and most successful derivative in the crypto space, trading more than $18T annually.\n\n\nThe …",
      "url": "https://blog.everstrike.io/how-an-obscure-otc-traded-derivative-took-over-crypto/",
      "urlToImage": "https://blog.everstrike.io/content/images/2023/05/Screenshot-from-2023-05-05-23-56-21-2.png",
      "publishedAt": "2023-05-13T20:46:15Z",
      "content": "This is the story of the perpetual future - a financial derivative that went from being an obscure OTC-traded derivative that nobody cared about - to being the largest and most successful derivative … [+9349 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "PA Media",
      "title": "Fraudster jailed for running multimillion-pound website iSpoof",
      "description": "Tejay Fletcher’s site offered tools allowing criminals to make phone calls that appeared to be from trusted companiesThe mastermind behind an online fraud shop used to con victims out of more than £100m has been jailed for more than 13 years.Tejay Fletcher, 3…",
      "url": "https://www.theguardian.com/uk-news/2023/may/19/fraudster-tejay-fletcher-jailed-for-multimillion-pound-website-ispoof",
      "urlToImage": "https://i.guim.co.uk/img/media/7050c4ec5e94a66fb6d7473bcbc764e62ec1594c/0_109_394_236/master/394.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cac06573e3443b63c32b9533145d4bb2",
      "publishedAt": "2023-05-19T12:28:15Z",
      "content": "The mastermind behind an online fraud shop used to con victims out of more than £100m has been jailed for more than 13 years.\r\nTejay Fletcher, 35, bought a £230,000 Lamborghini, two Range Rovers wort… [+3300 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Bryan Avelar and Tom Phillips",
      "title": "At least 153 died in custody in El Salvador’s gang crackdown – report",
      "description": "Human rights group’s 107-page report details human cost of President Nayib Bukele’s controversial ‘war on gangs’The human cost of El Salvador’s controversial “war on gangs” has been laid bare in a new report which claims dozens of prisoners were tortured and …",
      "url": "https://www.theguardian.com/world/2023/may/29/el-salvador-security-gangs-crackdown-cristosal-report-bukele",
      "urlToImage": "https://i.guim.co.uk/img/media/1831463d0f154aa64f0e03fedac3aeb8404d642b/0_418_6487_3894/master/6487.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9fb1fc109862518771543b70e9270913",
      "publishedAt": "2023-05-29T19:17:02Z",
      "content": "The human cost of El Salvadors controversial war on gangs has been laid bare in a new report which claims dozens of prisoners were tortured and killed in jail after being caught up in the year-long s… [+3537 chars]"
    },
    {
      "source": { "id": null, "name": "MakeUseOf" },
      "author": "Wasay Ali",
      "title": "What Is Crypto Unit Bias? How to Avoid Being Tricked By It",
      "description": "Don't get fooled by the units. Look at the bigger picture.",
      "url": "https://www.makeuseof.com/what-is-crypto-unit-bias/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/inserting-a-coin-in-a-black-piggy-bank.jpg",
      "publishedAt": "2023-05-04T11:15:17Z",
      "content": "Crypto unit bias is a common phenomenon that describes how investors are more likely to invest in whole units of a cryptocurrency rather than fractional ones due to a psychological tendency to prefer… [+7240 chars]"
    },
    {
      "source": { "id": null, "name": "heise online" },
      "author": "Marie-Claire Koch",
      "title": "Britischer Finanzausschuss: Handel mit Kryptowährung als Glücksspiel regulieren",
      "description": "Der britische Finanzausschuss fordert die Regierung auf, den Handel mit Kryptowährungen zu regulieren, da digitale Währungen keinen inneren Wert hätten.",
      "url": "https://www.heise.de/news/Britischer-Finanzausschuss-Handel-mit-Kryptowaehrung-als-Gluecksspiel-regulieren-9059216.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/9/0/4/7/3/shutterstock_2155067343-cbab8f25fc8775f2.jpg",
      "publishedAt": "2023-05-18T10:29:00Z",
      "content": "Der britische Finanzausschuss hat die Regierung aufgefordert, den Handel mit Kryptowährung zu regulieren. Der Finanzausschuss begründet seine Forderung damit, dass digitale Währungen wie Bitcoin und … [+2147 chars]"
    },
    {
      "source": { "id": null, "name": "Hackaday" },
      "author": "Jonathan Bennett",
      "title": "Books You Should Read: Red Team Blues",
      "description": "Martin Hench really likes playing on the Red team — on the attack. He’s a financial geek, understands cryptocurrency, understands how money is moved around to keep it hidden, and is really go…",
      "url": "https://hackaday.com/2023/06/01/books-you-should-read-red-team-blues/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2023/06/IMG_20230528_231228_featured.png",
      "publishedAt": "2023-06-01T17:00:38Z",
      "content": "Martin Hench really likes playing on the Red team — on the attack. Hes a financial geek, understands cryptocurrency, understands how money is moved around to keep it hidden, and is really good at min… [+1969 chars]"
    },
    {
      "source": { "id": "engadget", "name": "Engadget" },
      "author": "Andrew Tarantola",
      "title": "Hitting the Books: The abrupt and ignoble downfall of Sam Bankman-Fried",
      "description": "Seemingly overnight, Sam Bankman-Fried, the founder of FTX, went from cryptocurrency wunderkind to wanted for questioning by the FBI. After years of unfettered success, the walls of SBF's blockchain empire came crumbling down around him as his tricky financia…",
      "url": "https://www.engadget.com/hitting-the-books-sbf-brady-dale-wiley-ftx-143033761.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/4w1s9qSQRiYCwgQ0HYPkIA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/18b95d70-eb6c-11ed-a7fd-09985728dc43.cf.jpg",
      "publishedAt": "2023-05-14T14:30:33Z",
      "content": "Seemingly overnight, Sam Bankman-Fried, the founder of FTX, went from cryptocurrency wunderkind to wanted for questioning by the FBI. After years of unfettered success, the walls of SBF's blockchain … [+12543 chars]"
    },
    {
      "source": { "id": null, "name": "Microsiervos.com" },
      "author": "alvy@microsiervos.com (Alvy)",
      "title": "El reloj de la cadena de bloques de Bitcoin y un montón de datos interesantes",
      "description": "Condensando un montón de información en algo parecido a la esfera de un reloj, Timechain Calendar muestra datos en tiempo real sobre la cadena de bloques de bitcoin. Pero además de eso también permite revisar todo lo que sucedió en el pasado –desde el 3 de en…",
      "url": "https://www.microsiervos.com/archivo/economia/reloj-cadena-bloques-bitcoin-datos-interesantes.html",
      "urlToImage": "https://img.microsiervos.com/images2023/TimeChain.jpg",
      "publishedAt": "2023-05-13T14:54:22Z",
      "content": "Por @Alvy 13 de Mayo de 2023\r\nCondensando un montón de información en algo parecido a la esfera de un reloj, Timechain Calendar muestra datos en tiempo real sobre la cadena de bloques de bitcoin. Per… [+2295 chars]"
    },
    {
      "source": { "id": null, "name": "Presse-citron" },
      "author": "Setra",
      "title": "Que vient faire le Bitcoin à la présidentielle américaine ?",
      "description": "Des Américains pourraient voter en fonction de la position des candidats par rapport aux cryptomonnaies, selon un sondage réalisé sur Twitter.",
      "url": "https://www.presse-citron.net/que-vient-faire-le-bitcoin-a-la-presidentielle-americaine/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/2021/10/Bitcoin-1.jpg",
      "publishedAt": "2023-05-30T17:00:32Z",
      "content": "<ul><li>Un entrepreneur lance un sondage sur Twitter</li><li>Il demande si les électeurs tiendront compte de la position des candidats par rapport au Bitcoin</li><li>En tout cas, comme dans lUnion eu… [+2881 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks trade mixed as investors prepare for April inflation data and debt ceiling showdown",
      "description": "Senate Republican Leader Mitch McConnell said he doesn't have a \"secret plan\" to prevent a US debt default, which could happen in early June.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-april-cpi-report-debt-ceiling-limit-2023-5",
      "urlToImage": "https://i.insider.com/624c427316e2c400196663ce?width=1200&format=jpeg",
      "publishedAt": "2023-05-08T20:05:54Z",
      "content": "Reuters\r\n<ul><li>US stocks were mixed on Monday as investors prepare for the April CPI report and debt ceiling showdown in Congress.</li><li>The inflation report will help guide the Fed as to whether… [+2898 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "US stocks trade mixed as investors assess progress on debt ceiling talks",
      "description": "Treasury Secretary Janet Yellen said she sees progress being made in deliberations about raising the debt ceiling.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-nasdaq-debt-ceiling-limit-talks-sp500-2023-5",
      "urlToImage": "https://i.insider.com/646225865cd814001883d088?width=1200&format=jpeg",
      "publishedAt": "2023-05-15T13:42:16Z",
      "content": "An American flag hangs behind traders working on the floor of the New York Stock Exchange.Drew Angerer/Getty Images\r\n<ul>\n<li>US stocks were mixed on Monday as traders digested the latest debt ceilin… [+3215 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks fall as debt ceiling debate drags on and minutes show Fed split on more rate hikes",
      "description": "Treasury Secretary Janet Yellen reiterated to Congress that the US government could run out of money to pay its bills by as early as June 1.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-fed-minutes-split-more-interest-rate-hikes-2023-5",
      "urlToImage": "https://i.insider.com/5f6899d2323fc4001e0d7626?width=1200&format=jpeg",
      "publishedAt": "2023-05-24T20:03:35Z",
      "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks fell on Wednesday as investors weighed a split among Fed members against a split among lawmakers</li><li>Minutes from the Fed showed Fed members are split on … [+3067 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Phil Rosen",
      "title": "US stocks fall after the Fed hikes rates and bank contagion spreads",
      "description": "More banking fears have surfaced, with shares of PacWest plunging on reports that it is weighing strategic options, including a sale.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-rates-economy-bank-crisis-pacwest-2023-5",
      "urlToImage": "https://i.insider.com/6453adf0dcb78700180cd6a2?width=1200&format=jpeg",
      "publishedAt": "2023-05-04T13:49:43Z",
      "content": "Traders works on the trading floor at the New York Stock Exchange (NYSE) in New York City, U.S., March 5, 2020.Andrew Kelly/Reuters\r\n<ul>\n<li>US stocks dropped Thursday, a day after the Fed delivered… [+3017 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "Dow leaps 546 points as US stocks surge after Apple earnings and hot April jobs report",
      "description": "The S&P 500 notched its first win after four losses, powering past a jump in bond yields sparked by the stronger-than-expected jobs report for April.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-apple-nasdaq-jobs-report-regional-banks-2023-5",
      "urlToImage": "https://i.insider.com/62fcb73bf1df7e0018ead5e8?width=1200&format=jpeg",
      "publishedAt": "2023-05-05T20:04:30Z",
      "content": "(Photo by ANGELA WEISS/AFP via Getty Images)\r\n<ul>\n<li>US stocks jumped on Friday as tech behemoth Apple and regional bank stocks climbed. </li>\n<li>The S&P 500 was able to close higher after four da… [+3061 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Will Gendron",
      "title": "Crypto mining in Texas could be costing energy customers an extra $69 per year on their electrical bills",
      "description": "Since China banned crypto mining in 2021, a number of operations have moved to Texas, requiring an abundance of energy that is costing residents.",
      "url": "https://www.businessinsider.com/crypto-bitcoin-mining-texas-rising-energy-bill-cost-per-customer-2023-4",
      "urlToImage": "https://i.insider.com/644be03374e9330018ef8ab5?width=1200&format=jpeg",
      "publishedAt": "2023-05-02T14:48:09Z",
      "content": "The influx of crypto mining facilities in Texas has raised annual power bills across the statePhoto by Mark Felix / AFP) (Photo by MARK FELIX/AFP /AFP via Getty Images\r\n<ul>\n<li>Texas has become home… [+3511 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "US stocks fall to end the week with a loss as traders assess debt ceiling outlook",
      "description": "Major US indexes ended lower on Friday, with the S&P 500 notching its second-straight losing week. US default fears grew this week amid stalled talks.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-debt-ceiling-default-recession-fears-2023-5",
      "urlToImage": "https://i.insider.com/5e970175b3b092567c2cf358?width=1200&format=jpeg",
      "publishedAt": "2023-05-12T20:04:06Z",
      "content": "Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks slid on Friday as traders assessed the outlook on the debt ceiling crisis and recession odds. </li>\n<li>All three indexes ended lower, with the S&P 500 no… [+2747 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Morgan Chittum",
      "title": "US stocks trade mixed as investors cheer Nvidia earnings and assess debt ceiling talks",
      "description": "The Nasdaq Composite surged after Nvidia posted stellar quarterly results and gave investors even more to hope for with strong guidance.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-nvidia-earnings-debt-ceiling-talks-tech-rally-2023-5",
      "urlToImage": "https://i.insider.com/634992172f7a5a00185286f9?width=1200&format=jpeg",
      "publishedAt": "2023-05-25T20:09:17Z",
      "content": "Traders work on the New York Stock Exchange floor in New York City.AP Photo/Ted Shaffrey\r\n<ul>\n<li>\nThe Nasdaq led soared on Thursday on AI hype generated by Nvidia's big earnings report. \r\n\n</li>\n<l… [+2632 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "Dow jumps more than 300 points as Biden, McCarthy appear set to reach a deal to raise the US debt limit",
      "description": "The Dow snapped a losing streak as investors headed into Memorial Day anticipating Washington will reach a deal to raise the debt ceiling.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-debt-ceiling-deal-talks-dow-nasdaq-biden-2023-5",
      "urlToImage": "https://i.insider.com/646225865cd814001883d088?width=1200&format=jpeg",
      "publishedAt": "2023-05-26T20:06:18Z",
      "content": "House Speaker Kevin McCarthy and President Joe Biden met in the Oval Office on May 9.Anna Moneymaker/Getty Images\r\n<ul>\n<li>US stocks jumped Friday on reports the White House and Republican leadershi… [+3508 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Carla Mozée",
      "title": "US stocks rise as White House and Republican lawmakers near deal to raise the debt ceiling",
      "description": "Stocks may notch gains ahead of the Memorial Day holiday as lawmakers appear to be nearing a deal to lift the $31 trillion debt ceiling.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-debt-ceiling-talks-deal-nasdaq-sp500-2023-5",
      "urlToImage": "https://i.insider.com/64709f933be3b50019f6f3de?width=1200&format=jpeg",
      "publishedAt": "2023-05-26T13:37:50Z",
      "content": "Traders work the floor of the New York Stock Exchange in New York City.TIMOTHY A. CLARY/AFP via Getty Images\r\n<ul>\n<li>US stocks rose Friday following reports lawmakers are nearing a deal to raise th… [+3197 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks trade mixed after debt ceiling deal and ongoing AI frenzy",
      "description": "The debt ceiling deal would raise the debt ceiling until January 2025 and includes various spending cuts and deficit reduction measures.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-debt-ceiling-deal-artificial-intelligence-nvidia-2023-5",
      "urlToImage": "https://i.insider.com/6475f585085acb0018fedc31?width=1200&format=jpeg",
      "publishedAt": "2023-05-30T13:37:16Z",
      "content": "Reuters / Brendan McDermid\r\n<ul><li>US stocks were mixed on Tuesday after a debt ceiling deal was reached in Congress before the upcoming deadline.</li><li>The deal still needs to be voted on in the … [+2681 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns inflation is systemic and investors should buy gold, real estate, gas, and food",
      "description": "\"The whole system is in trouble. My biggest concern is that inflation is now systemic,\" personal finance guru Robert Kiyosaki said.",
      "url": "https://markets.businessinsider.com/news/stocks/rich-dad-poor-dad-robert-kiyosaki-inflation-investing-advice-gold-2023-5",
      "urlToImage": "https://i.insider.com/5e2b32d662fa813e064000cb?width=1200&format=jpeg",
      "publishedAt": "2023-05-08T15:28:00Z",
      "content": "The Rich Dad Channel/YouTube\r\n<ul>\n<li>Inflation has become a systemic issue, according to \"Rich Dad Poor Dad\" author Robert Kiyosaki.</li>\n<li>The personal finance guru touted his top inflation hedg… [+2674 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Matthew Fox",
      "title": "US stocks fall ahead of renewed debt ceiling talks in Washington",
      "description": "Treasury Secretary Janet Yellen warned that \"time is running out\" and that the debt ceiling showdown is already impacting Americans.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-renewed-debt-ceiling-talks-biden-mccarthy-2023-5",
      "urlToImage": "https://i.insider.com/6463811c3c46f3001898e0e3?width=1200&format=jpeg",
      "publishedAt": "2023-05-16T13:40:31Z",
      "content": "U.S. President Joe Biden and Speaker of the House Kevin McCarthy (R-CA) depart the U.S. Capitol following the Friends of Ireland Luncheon on Saint Patrick's Day March 17, 2023 in Washington, DC. The … [+2917 chars]"
    }
  ];
  constructor() {
    super();
    this.state ={
      articles : [],
      loading : false,
      pageNumber : 1
    }
  }

   componentDidMount() {
    this.setState({
      loading : true,
      pageNumber : 1
    })
   this.fetchData();
  }

  fetchData = async() =>{
    if(this.state.pageNumber > Math.ceil(this.state.totalResults/10)) {
      alert("Enough news for the day !!");
    } else {
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles : parsedData?.articles,
      totalResults : parsedData?.totalResults,
      loading : false})
    }
  }

  handleNextPage = () =>{
    this.setState({ pageNumber : this.state.pageNumber + 1})
    this.fetchData();
  }

  handlePreviousPage = () =>{
    console.log("prev");
    this.setState({pageNumber : this.state.pageNumber - 1 });
    this.fetchData();
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: "aquamarine"}}>
        <div className="text-center my-2">
          <h2>News Desk</h2>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className="d-flex col-xs-12 col-md-4 my-2 justify-content-center" key={element?.url}>
              <NewsItem title={element?.title} desc={element?.description} imageUrl={element?.urlToImage} newsUrl={element?.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-primary btn-dark" onClick={this.handlePreviousPage}>Previous</button>
          <button className="btn btn-primary btn-dark btn-sm"  onClick={this.handleNextPage}>Next</button>
        </div>
      </div>
    )
  }
}
