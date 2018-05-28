import React                           from 'react';
import { getChatMessagesApi }          from '../../services/api/chats';
import { createChatMessageApi }        from '../../services/api/chats';
import { CommentsList, NewCommentForm} from '.';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      updating: false
    }

    this.fetchMessages    = this.fetchMessages.bind(this);
    this.setFetchTimer    = this.setFetchTimer.bind(this);
    this.createNewComment = this.createNewComment.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchMessages();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchMessages() {
    if (this._isMounted) {
      return getChatMessagesApi(this.props.chat, this.state.updating)
        .then((data) => {
          if (data.comments.length > 0) {
            this.setState({
              updating: true,
              messages: this.state.messages.concat(data.comments)
            });
          }
          this.setFetchTimer(data.poll_interval);
        }).catch((err) => {
          this.props.displayMessage('There was an error loading the chat messages.');
        });
    }
  }

  setFetchTimer(interval) {
    interval = interval < 3000 ? 3000 : interval

    setTimeout(() => {
      this.fetchMessages();
    }, interval);
  }

  createNewComment(commentBody) {
    const data = {
      chat_id: this.props.chat.id,
      message: commentBody
    }

    return createChatMessageApi(this.props.currentUser.accessToken, data)
      .then(() => {
        this.fetchMessages();
      }).catch(() => {
        this.props.displayMessage('There was an error creating your comment.');
      });
  }

  render() {
    let commentForm;

    if (this.props.loggedIn) {
      commentForm = <NewCommentForm
        loggedIn={this.props.loggedIn}
        currentUser={this.props.currentUser}
        displayMessage={this.props.displayMessage}
        createNewComment={this.createNewComment}
      />;
    } else {
      commentForm = (
        <div>
          <p className='loading'>You must be logged in to comment</p>
        </div>
      );
    }

    return (
      <div id='videoCommentsWrapper'>
        <CommentsList
          messages={this.state.messages}
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
        />
        { commentForm }
      </div>
    );
  }
}
