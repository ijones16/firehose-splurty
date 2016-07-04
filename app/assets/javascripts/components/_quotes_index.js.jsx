var QuotesIndex = React.createClass({
  propTypes: {
    quote: React.PropTypes.object
  },

  render: function(){
    return(
      <div>
        <h2>
          <span>Splurty / No. {this.props.quote.id} </span>
          Here's the <u>best advice about the universe</u> you can get!
        </h2>

        <h1>{this.props.quote.saying}</h1>
        <h2 className="pull-right"> {this.props.author}</h2>

        <br className="clear"/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
});