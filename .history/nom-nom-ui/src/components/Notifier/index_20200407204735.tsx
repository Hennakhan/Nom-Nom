import React, { Component } from "react"
import "./Notifier.css";
import classnames from 'classnames';

type NotifierProps = {
    offline: boolean | undefined;
}


class Notifier extends Component<NotifierProps> {

    render() {
      const offln = this.props.offline === undefined ? true : this.props.offline;   
      const notifyclass = classnames('notify', {
        danger: offln
      });
      const message = offln ?
    `CloudyCam is offline! Your images will be saved now and then uploaded to your Cloudinary Media Library once your Internet connection is back up.`
    :
    `Take a picture and it will be uploaded to your Cloudinary Media Library.`;
      return (
          <div className={notifyclass}>
              <p>
                  <em>{message}</em>
              </p>
          </div>
      );
    }
  }

  export default Notifier;