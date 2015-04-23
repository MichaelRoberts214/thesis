var mui = require('material-ui');
var React = require('react');

//NavBar Components
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var DropDownMenu = mui.DropDownMenu;
var FontIcon = mui.FontIcon;
var FlatButton = mui.FlatButton;
var DropDownIcon = mui.DropDownIcon;
//Set Material-UI Vars
var LeftNav = mui.LeftNav;
var Modal = require('react-modal');
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var TextField = mui.TextField;
var Paper = mui.Paper;
var injectTapEventPlugin = require("react-tap-event-plugin");
var GraphActions = require('../actions/GraphActions.js');
var GraphStore = require('../stores/GraphStore.jsx');
var NewTopicForm = require('./NewTopicForm.jsx');
var Reflux = require('reflux');

injectTapEventPlugin();

// these should be populated by the database
var menuItems = [
  {payload: '1', text:'Example Framework 1'},
  {payload: '2', text:'Example Framework 2'},
];

var appElement = document.getElementById('app');
Modal.setAppElement(appElement);
Modal.injectCSS();



var GraphBar = React.createClass({
 
  mixins: [Reflux.listenTo(GraphStore, 'updateData')],

  getInitialState: function() {
    return {
      addedTopic: '',
      modalIsOpen: false,
      channelName: ''
    };
  },

  updateData: function(data) {
    this.setState({
      channelName: data.channelName
    });
  },

  handleSave: function() {
    // console.log('handleSave', this.state.addedTopic);
    GraphActions.addNode(this.state.addedTopic, this.state.topicId);
    this.closeModal();
  },

  handleTopic: function(component, event) {
    this.setState({addedTopic: event.target.value});
  },

  openModal: function(){
    this.setState({modalIsOpen: true});
  },

  closeModal: function(){
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var curriculumLink = "./curriculum.html#" + this.state.channelName;
    return (
      <div className="full">
        <Toolbar className="button-nav-container bar-div">
          <ToolbarGroup key={0} float="left">
            <h3 className="light-font">Channel: {this.state.channelName}</h3>
          </ToolbarGroup>
          <ToolbarGroup key={1} float="left" className="nav-bar-title">
            <FlatButton className="bar-btn-flat" secondary={true}  linkButton={true} href={curriculumLink}>
              <span className="mui-raised-button-label light-font">{this.state.channelName} Curricula</span>
            </FlatButton>
          </ToolbarGroup>
          <ToolbarGroup key={2} float="left">
            <DropDownMenu className="light-font" menuItems={menuItems} />
          </ToolbarGroup>
          <ToolbarGroup key={3} float="left">
            <FlatButton className="bar-btn-flat" secondary={true}  linkButton={true} onClick={this.openModal}><span className="light-font mui-raised-button-label">Add New Topic</span></FlatButton>
          </ToolbarGroup>
          <ToolbarGroup key={4} float="left">
            <Modal className="topic" isOpen={this.state.modalIsOpen}>
              <NewTopicForm handleTopic={this.handleTopic} /> <br /> <br />
              <button onClick={this.handleSave} className="waves-effect waves-light btn-flat light-font">Add Topic</button>
              <button onClick={this.closeModal} className="waves-effect waves-light btn-flat light-font">Cancel</button>
            </Modal>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
});

module.exports = GraphBar;
