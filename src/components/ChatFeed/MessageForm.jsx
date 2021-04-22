import React,{useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import {SendOutlined, PictureOutlined} from '@ant-design/icons'

const MessageForm = (props) => {
    const {chatID, creds} = props;
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = message.trim();
        if(text.length > 0) sendMessage(creds, chatID, { text })

        setMessage('');
    }
    const handleChange = (e) =>{
        setMessage(e.target.value)
        isTyping(props, chatID)
    }
    const handleUpload = (e)=>{
        sendMessage(creds, chatID, {files: e.target.files, text: ''})
    }
    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input className="message-input" placeholder="Send Message" value={message}
                onChange = {(e)=> handleChange(e) } onSubmit={handleSubmit}/>
                <label htmlFor="upload-button">
                    <span className="image-button">
                        <PictureOutlined className="picture-icon"/>
                    </span>
                </label>
                <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={handleUpload}
                />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon"/>
                </button>
            </form>
        </div>
    )
}

export default MessageForm
