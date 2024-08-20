import React, { Component } from 'react'

export class NewsItem extends Component {
    articles = [
        
        {
        "source": {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
        },
        "author": "Simon J. Levien, Michael Gold",
        "title": "‘Crazy laugh’: Trump leans into attacks on Harris",
        "description": "At a rally in Pennsylvania, Donald Trump vacillated between criticisms of the economy and immigration and personal attacks on Vice President Kamala Harris.",
        "url": "http://www.afr.com/world/north-america/ranting-and-raving-trump-leans-into-attacks-on-harris-20240818-p5k3ar",
        "urlToImage": "https://static.ffx.io/images/$zoom_0.2228%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_30/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/d58197eb08d80d3bb1e6250f0904ca4be71d576a",
        "publishedAt": "2024-08-18T02:42:57Z",
        "content": "Wilkes-Barre, Pennsylvania | Former president Donald Trump in a campaign speech on Saturday (Sunday AEST) bounced among complaints about the economy and immigration, wide-ranging digressions and a nu… [+421 chars]"
        },

        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Sniper shot Trump gunman's weapon and delayed him - report",
        "description": "A police sniper potentially saved lives by shooting the rifle of the would-be assassin, a congressional report says.",
        "url": "https://www.bbc.co.uk/news/articles/c4gl2jqem0eo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/097d/live/46db5b40-5baf-11ef-8f0f-0577398c3339.jpg",
        "publishedAt": "2024-08-18T02:22:15.0815108Z",
        "content": "The former president did not have the protection during his 13 July rally in Butler when a bullet nearly hit him squarely in the head.\r\nMr Higgins' report said a Butler SWAT operator was the first to… [+2830 chars]"
        },

        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": null,
        "title": "Trump remarks on economy laced with personal insults at Pennsylvania rally",
        "description": "During the rally, former President Donald Trump declared several times that he was better looking than Vice President Kamala Harris.",
        "url": "https://www.cbsnews.com/news/trump-economic-remarks-personal-insults-pennsylvania-rally/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/08/16/32f17d1f-41a5-4878-8bf6-0168320d249c/thumbnail/1200x630/98f547bff1333206c25937bf82aeb1ee/cbsn-fusion-trump-says-hes-entitled-to-personal-attacks-on-kamala-harris-thumbnail.jpg?v=d8f7565ef3e8b72561ee316b5993cbf9",
        "publishedAt": "2024-08-18T00:25:00+00:00",
        "content": "Former President Donald Trump on Saturday repeatedly swerved from a message focused on the economy into non-sequiturs and personal attacks, including declaring several times that he was better lookin… [+5790 chars]"
        },

        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Sarah Rumpf-Whitten",
        "title": "Trump says Harris has gone 'full communist' after unveiling handout-filled economic policy: 'Never worked'",
        "description": "Former President Trump slammed Vice President Kamala Harris during a Pennsylvania campaign rally Saturday for her \"socialist price controls.\"",
        "url": "https://www.foxnews.com/politics/trump-says-harris-full-communist-unveiling-handout-ridden-economic-policy-never-worked",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/Kamala-laughing-Trump.jpg",
        "publishedAt": "2024-08-18T00:20:31Z",
        "content": "Former President Trump took a swing at Vice President Harris's recently debuted economic plan, saying the Democratic presidential nominee had gone \"full communist.\"\r\n\"In her speech yesterday, Kamala … [+2942 chars]"
        },

        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Michael Dorgan",
        "title": "Michael Moore's stark warning to Democrats on election momentum: 'It’s ours to blow'",
        "description": "Documentary filmmaker Michael Moore says Vice President Kamala Harris should continue doing \"weird and cringe\" until the debate and then beat former President Trump on the debate stage.",
        "url": "https://www.foxnews.com/politics/michael-moores-stark-warning-democrats-election-momentum-its-ours-blow",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/Michael-Moore.jpg",
        "publishedAt": "2024-08-18T00:04:16Z",
        "content": "Join Fox News for access to this content\r\nYou have reached your maximum number of articles. Log in or create an account FREE of charge to continue reading.\r\nBy entering your email and pushing continu… [+3974 chars]"
        },

        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Marianne LeVine, Isaac Arnsdorf",
        "title": "Trump escalates gendered personal insults against Harris, defying GOP pressure",
        "description": "The Republican nominee also stoked Democrats’ rift over Israel by baselessly claiming Harris passed over Gov. Josh Shapiro as running mate because he is Jewish.",
        "url": "https://www.washingtonpost.com/politics/2024/08/17/trump-harris-presidential/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NEIJDJ4EDQQZG6F53PKB6ARBDU_size-normalized.jpg&w=1440",
        "publishedAt": "2024-08-17T23:37:11Z",
        "content": "WILKES-BARRE, Pa. Republican presidential nominee Donald Trump fixated on Vice President Kamala Harriss appearance in terms he acknowledged were offensive, rejecting pressure from GOP allies to empha… [+5672 chars]"
        },

        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Julia Manchester",
        "title": "Trump continues personal attacks against Harris: ‘I’m a better looking person’",
        "description": "Former President Trump campaigned in the battleground state of Pennsylvania on Saturday and went after Vice President Harris’s physical appearance as his Republican allies have pushed him to instead focus on the policy differences with his political opponent.…",
        "url": "https://thehill.com/homenews/4833044-trump-digs-in-on-personal-attacks-against-harris-im-a-better-looking-person/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/08/trump.jpg?w=1280",
        "publishedAt": "2024-08-17T23:20:39Z",
        "content": "Skip to content\r\nFormer President Trump campaigned in the battleground state of Pennsylvania on Saturday and went after Vice President Harris’s physical appearance as his Republican allies have pushe… [+3340 chars]"
        },

        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Elizabeth Weibel",
        "title": "Trump Hammers Home Plan to Eliminate Tax on Social Security Income",
        "description": "Former President Donald Trump reiterated a campaign promise to eliminate taxes on social security income for seniors.",
        "url": "https://www.breitbart.com/politics/2024/08/17/trump-hammers-home-plan-to-eliminate-tax-on-social-security-income/",
        "urlToImage": "https://media.breitbart.com/media/2024/08/Trump-Rallies-in-Wilkes-Barre-PA-640x335.jpeg",
        "publishedAt": "2024-08-17T22:40:50Z",
        "content": "Former President Donald Trump reiterated a campaign promise to eliminate taxes on Social Security income for seniors.\r\nWhile speaking from Wilkes-Barre, Pennsylvania, on Saturday, Trump criticized Vi… [+2098 chars]"
        },

        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Filip Timotija",
        "title": "GOP pollster Frank Luntz: Trump driving gender gap among voters with insults",
        "description": "Republican pollster Frank Luntz said that former President Trump is driving the gender gap among 2024 election voters with insults toward his political opponents.  CNN’s anchor Michael Smerconish presented a recent Fox News poll showing a 22-point gender gap …",
        "url": "https://thehill.com/homenews/campaign/4833017-gop-pollster-luntz-trump-driving-gender-gap-among-voters-with-insults/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/11/GettyImages-1235970497.jpg?w=1280",
        "publishedAt": "2024-08-17T22:14:10Z",
        "content": "Skip to content\r\nRepublican pollster Frank Luntz said that former President Trump is driving the gender gap among 2024 election voters with insults toward his political opponents. \r\nCNN’s anchor Mich… [+2032 chars]"
        },

        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Elizabeth Weibel",
        "title": "Trump Supporters Turn Out in Massive Numbers for Rally in Wilkes Barre",
        "description": "Supporters of former President Donald Trump turned out in massive numbers for his rally in Wilkes-Barre, Pennsylvania, on Saturday.",
        "url": "https://www.breitbart.com/politics/2024/08/17/trump-supporters-turn-out-in-massive-numbers-for-rally-in-wilkes-barre/",
        "urlToImage": "https://media.breitbart.com/media/2024/08/Crowd-for-Trump-in-Wilkes-Barre-640x335.jpeg",
        "publishedAt": "2024-08-17T22:07:53Z",
        "content": "Supporters of former President Donald Trump turned out in massive numbers for his rally in Wilkes-Barre, Pennsylvania, on Saturday.\r\nVideo footage posted to X appeared to show a massive crowd of peop… [+519 chars]"
        },

        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Elizabeth Weibel",
        "title": "Trump Nukes Harris for Hiding from Press: 'Her Form of the Basement'",
        "description": "Former President Donald Trump nuked Vice President Kamala Harris for having avoided answering questions from the press for 27 days.",
        "url": "https://www.breitbart.com/politics/2024/08/17/trump-nukes-kamala-harris-for-hiding-from-press-her-form-of-the-basement/",
        "urlToImage": "https://media.breitbart.com/media/2024/08/Trump-Calls-Out-Harris-640x335.jpeg",
        "publishedAt": "2024-08-17T22:02:16Z",
        "content": "Former President Donald Trump nuked Vice President Kamala Harris for having avoided answering questions from the press for 27 days.\r\nDuring his speech from the Mohegan Sun Arena in Wilkes-Barre, Penn… [+2023 chars]"
        },

        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Michael Scherer, Josh Dawsey",
        "title": "Trump campaign attempts to reset with candidate who sometimes has his own plans",
        "description": "Kamala Harris’s entry into the race has scrambled Donald Trump’s plans and revived concerns about whether he can focus his attacks.",
        "url": "https://www.washingtonpost.com/politics/2024/08/17/trump-campaign-harris/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WXOU7XJL7BHL7IOBXDKYGDYNC4_size-normalized.JPG&w=1440",
        "publishedAt": "2024-08-17T21:43:34Z",
        "content": "Donald Trumps top brass gathered reporters in West Palm Beach, Fla., this month to showcase the inner workings of the former presidents campaign and exude a we-have-it-under-control confidence.\r\nAs P… [+11088 chars]"
        },

        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Breitbart News",
        "title": "Watch Live: Donald Trump Holds Rally in Wilkes-Barre, PA",
        "description": "Former President Donald Trump speaks to supporters at a rally in Wilkes-Barre, Pennsylvania, on Saturday, August 17.",
        "url": "https://www.breitbart.com/2024-election/2024/08/17/watch-live-donald-trump-holds-rally-in-wilkes-barre-pa/",
        "urlToImage": "https://media.breitbart.com/media/2024/08/July2024-former-pres-donald-trump-smiling-rally-ap-640x335.jpg",
        "publishedAt": "2024-08-17T20:40:01Z",
        "content": "Former President Donald Trump speaks to supporters at a rally in Wilkes-Barre, Pennsylvania, on Saturday, August 17."
        },

        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Tara Suter",
        "title": "Sunday shows preview: Harris gains on Trump in key states ahead of DNC",
        "description": "The focus of this week’s Sunday shows will most likely focus on Vice President Harris’s rise in polls as the Democratic nominee in important battleground states against former President Trump. Harris has had a whirlwind few weeks since President Biden exited …",
        "url": "https://thehill.com/homenews/sunday-talk-shows/4832921-sunday-shows-preview-harris-gains-on-trump-in-key-states-ahead-of-dnc/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/08/Sunday-Shows-Preview-Harris.Trump-08.17.png?w=1280",
        "publishedAt": "2024-08-17T20:02:21Z",
        "content": "Skip to content\r\nThe focus of this week’s Sunday shows will most likely focus on Vice President Harris’s rise in polls as the Democratic nominee in important battleground states against former Presid… [+3354 chars]"
        },

        {
        "source": {
        "id": "the-huffington-post",
        "name": "The Huffington Post"
        },
        "author": "Marco Margaritoff",
        "title": "Michael Moore Predicts Trump Debacle In Debate Against Harris",
        "description": "The “Fahrenheit 9/11” director described what voters may see when Donald Trump and Kamala Harris meet onstage.",
        "url": "https://www.huffpost.com/entry/michael-moore-trump-debacle-debate-harris_n_66c0c8e6e4b044939c2c96c2",
        "urlToImage": "https://img.huffingtonpost.com/asset/66c0ca3b2100005000940f76.jpeg?cache=Jjn3fSyEhT&ops=1200_630",
        "publishedAt": "2024-08-17T19:27:44Z",
        "content": "Michael Moore is sharing some hopeful predictions as presidential candidates Donald Trump and Kamala Harris prepare to debate.\r\nIn a Guardian story published Thursday, the Fahrenheit 9/11 director su… [+1638 chars]"
        },

        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "ADRIANA GOMEZ LICON, MICHAEL RUBINKAM and MICHELLE L. PRICE",
        "title": "Trump zigzags between economic remarks and personal insults at rally in critical Pennsylvania",
        "description": "WILKES-BARRE, Pa. (AP) — Former President Donald Trump on Saturday repeatedly swerved from a message focused on the economy into non sequiturs and personal attacks, including thrice declaring that he was better looking than Vice President Kamala Harris.",
        "url": "https://apnews.com/d1e8098a7588bfd1af685327f18ab3a1",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/a2260f597e05441ca9125824ae6ef6d8/2460.jpeg",
        "publishedAt": "2024-08-17T16:43:08Z",
        "content": "WILKES-BARRE, Pa. (AP) — Former President Donald Trump on Saturday repeatedly swerved from a message focused on the economy into non sequiturs and personal attacks, including thrice declaring that he… [+5969 chars]"
        },

        {
        "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Harris and Trump zero in on key swing state as US election race heats up",
        "description": "Democratic and Republican presidential nominees are campaigning in battleground state of Pennsylvania this weekend.",
        "url": "https://www.aljazeera.com/news/2024/8/17/harris-and-trump-zero-in-on-key-swing-state-as-us-election-race-heats-up",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/08/2024-08-08T221117Z_1871672616_RC2YB9A3XVCV_RTRMADP_3_USA-ELECTION-1723911119.jpg?resize=1920%2C1440",
        "publishedAt": "2024-08-17T16:15:41Z",
        "content": "Donald Trump and Kamala Harris are holding campaign events in the key US swing state of Pennsylvania this weekend, as the race between the United States presidential candidates heats up before Novemb… [+3077 chars]"
        },

        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Zach Schonfeld",
        "title": "Supreme Court immunity fallout to crescendo in September",
        "description": "The fallout over the Supreme Court’s presidential immunity decision will crescendo next month, with judges in two of former President Trump’s four criminal cases set to tackle the implications.  On Sept. 5, U.S. District Judge Tanya Chutkan will weigh how Tru…",
        "url": "https://thehill.com/regulation/court-battles/4831636-supreme-court-immunity-trump-cases/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/08/Trump-judges-fallout_081724_AP_Julia-Nikhinson.png?w=1280",
        "publishedAt": "2024-08-17T16:00:00Z",
        "content": "Skip to content\r\nThe fallout over the Supreme Court’s presidential immunity decision will crescendo next month, with judges in two of former President Trump’s four criminal cases set to tackle the im… [+6635 chars]"
        },

        {
            "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Harris and Trump zero in on key swing state as US election race heats up",
            "description": "Democratic and Republican presidential nominees are campaigning in battleground state of Pennsylvania this weekend.",
            "url": "https://www.aljazeera.com/news/2024/8/17/harris-and-trump-zero-in-on-key-swing-state-as-us-election-race-heats-up",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/08/2024-08-08T221117Z_1871672616_RC2YB9A3XVCV_RTRMADP_3_USA-ELECTION-1723911119.jpg?resize=1920%2C1440",
            "publishedAt": "2024-08-17T16:15:41Z",
            "content": "Donald Trump and Kamala Harris are holding campaign events in the key US swing state of Pennsylvania this weekend, as the race between the United States presidential candidates heats up before Novemb… [+3077 chars]"
            },

            {
                "source": {
                "id": "the-huffington-post",
                "name": "The Huffington Post"
                },
                "author": "Marco Margaritoff",
                "title": "Michael Moore Predicts Trump Debacle In Debate Against Harris",
                "description": "The “Fahrenheit 9/11” director described what voters may see when Donald Trump and Kamala Harris meet onstage.",
                "url": "https://www.huffpost.com/entry/michael-moore-trump-debacle-debate-harris_n_66c0c8e6e4b044939c2c96c2",
                "urlToImage": "https://img.huffingtonpost.com/asset/66c0ca3b2100005000940f76.jpeg?cache=Jjn3fSyEhT&ops=1200_630",
                "publishedAt": "2024-08-17T19:27:44Z",
                "content": "Michael Moore is sharing some hopeful predictions as presidential candidates Donald Trump and Kamala Harris prepare to debate.\r\nIn a Guardian story published Thursday, the Fahrenheit 9/11 director su… [+1638 chars]"
                }

        ]
  constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading: false
    }
  }

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
               </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>

      </div>
    )
  }
}

export default NewsItem
