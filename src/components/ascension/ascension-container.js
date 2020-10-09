import React, { Component } from 'react';
import AscensionItem from './ascension-item';

export default class AscensionContainer extends Component {
  constructor() {
    super()

    // instantiated (creating real life version of a class definition and rendering it on the page)
    this.state = {
      pageTitle: "Welcome to Ascension",
      isLoading: false,
      data: [
        { title: "energy centers", category: "chakras", slug: "energy centers" },
        { title: "minerals", category: "crystals", slug: "minerals" },
        { title: "self healing", category: "meditation", slug: "self healing" },
        { title: "water", category: "water", slug: "water" }
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  ascensionItems() {
    return this.state.data.map(item => {
      return <AscensionItem 
        title={item.title}
        url={"google.com"} 
        slug={item.slug}
      />;
    })
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('energy centers')}>chakras</button>
        <button onClick={() => this.handleFilter('minerals')}>crystals</button>
        <button onClick={() => this.handleFilter('self healing')}>meditation</button>
        <button onClick={() => this.handleFilter('water')}>water</button>
        
        {this.ascensionItems()}

      </div>
    );
  }
}