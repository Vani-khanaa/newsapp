import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {



    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
      }


  async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ddab6190dc54437cba6f09c8b16ef5a3";
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({articles: parsedData.articles}) 
  } 

  handlePrevClick =  async()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ddab6190dc54437cba6f09c8b16ef5a3&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })

   }

   handleNextClick = async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ddab6190dc54437cba6f09c8b16ef5a3&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    })
   }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>
        {/* <InfiniteScroll>
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<h4>Loading...</h4>} */}
        

        <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,45):""} 
                  description={element.description?element.description.slice(0,88):""} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div> 
            })}
           
        
        
      </div>
      {/* </InfiniteScroll> */}

      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div> 
    )
  }
}

export default News


function Navbar ({links}) {
    return 
    <nav>
        <ul>
           {links.map((link)=>{
            <li key={link.id}>
                <a href={link.url}>{link.text}</a>
            </li>
            
           })}
        </ul>
    </nav>
}