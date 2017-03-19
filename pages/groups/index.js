import React from 'react';
import Layout from '../../components/Layout';
import TableView from '../../components/TableView/TableView';
import ToolbarView from '../../components/Toolbar/ToolbarView';
import CreateGroupForm from '../../components/Forms/CreateGroupForm';
import constants from '../../core/constants';

class GroupsPage extends React.Component {

  state = {
    groups: [],
    groupsJoined: [],
    createGroupView: false,
    group: {},
    groupsFilterColumn: '',
    groupsFilterText: '',
    groupsRowCount: 0,
  };

  componentWillMount() {
    this.getGroups();
  }

  componentDidMount() {
    document.title = constants.app_title;
    document.body.style.backgroundColor = constants.bg_white;
  }

  getGroups() {
    const that = this;
    fetch(constants.get_groups_url).then(r => r.json())
      .then(data => {
        // for table visualization we join groups into a comma separated string
        const groupsJoined = data.map((g) => {
          const users = g.users.map((u) => u.username);
          return { name: g.name, users: users.join() };
        });
        that.setState({ groups: data, groupsJoined });
      })
      .catch(e => console.log(e));
  }

  /**
   * Groups Tab event handlers
   */
  handleGroupRowClick = (event, group, row) => {
    this.setState({ group: this.state.groups[row], createGroupView: true });
  };

  handleCreateGroup = () => {
    this.setState({ group: {}, createGroupView: true });
  };

  handleCreateGroupSubmit = () => {
    this.getGroups();
    this.setState({ createGroupView: false, activeTab: 'Groups', groupsFilterText: '' });
  };

  handleCreateGroupCancel = () => {
    event.preventDefault();
    this.setState({ createGroupView: false, activeTab: 'Groups', groupsFilterText: '' });
  };

  handleGroupFilterChanged = (event, filter, filterText) => {
    event.preventDefault();
    this.setState({ groupsFilterColumn: filter.field, groupsFilterText: filterText });
  };

  handleGroupSearch = (event) => {
    this.setState({ groupsFilterColumn: '*', groupsFilterText: event.target.value });
  };

  handleGroupSearchClose = () => {
    this.setState({ groupsFilterColumn: '', groupsFilterText: '' });
  };

  observeGroupsRowCount = (count) => {
    this.setState({ groupsRowCount: count });
  };

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav>
        {(() => {
          if (this.state.createGroupView) {
            return (<CreateGroupForm handleSubmit={this.handleCreateGroupSubmit.bind(this)}
              handleCancel={this.handleCreateGroupCancel.bind(this)}
              value={this.state.group}/>);
          }
          const pageHeader = (<div className="page-header" key="groups-page-header">
            <h2> Groups</h2>
          </div>);

          /**
           * Groups Content
           */
          let groupsContent = [];

          if (this.state.groups.length) {
            const columns = [
              {
                field: 'name',
                displayName: 'Name',
              },
              {
                field: 'users',
                displayName: 'Members',
              },
            ];
            groupsContent = [
              <ToolbarView key="groups-toolbar"
                primaryAction={{ label: 'Create Group', action: this.handleCreateGroup.bind(this) }}
                columns={columns}
                filterChanged={this.handleGroupFilterChanged.bind(this)}
                handleSearch={this.handleGroupSearch.bind(this)}
                handleSearchClose={this.handleGroupSearchClose.bind(this)}
                resultsCount={this.state.groupsRowCount}/>,
              <TableView key="groups-table-view"
                columns={columns}
                data={this.state.groupsJoined}
                filterColumn={this.state.groupsFilterColumn}
                filterText={this.state.groupsFilterText}
                handleRowClick={this.handleGroupRowClick}
                observeRowCount={this.observeGroupsRowCount.bind(this)}/>,
            ];
          }
          else {
            groupsContent = [
              <div className="blank-slate-pf table-view-pf-empty" key="no-users-div">
                <div className="blank-slate-pf-icon">
                  <span className="pficon pficon pficon-add-circle-o"></span>
                </div>
                <h2 key="users-no-users">No groups exist.</h2>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={this.handleCreateGroup}>Create Group</button>
              </div>,
            ];
          }

          return [
            pageHeader,
            <br key="groups-page-br"/>,
            groupsContent,
          ];
        })()}
      </Layout>
    );
  }
}

export default GroupsPage;
