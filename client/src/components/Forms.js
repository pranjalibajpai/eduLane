import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';

const Forms = () => {
    const [postData, setPostData] = useState({
      title: '',
      content: '',
      tags: ''
    });
    const dispatch = useDispatch();

    //when submit we have to dispatch
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost(postData));
    }

    return(<Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" onChange={(e) => setPostData({ ...postData, title: e.target.value})} name="title" id="title" placeholder="Enter Title" value={postData.title}/>
      </FormGroup>
        <FormGroup>
        <Label for="content">Content</Label>
        <Input type="textarea" onChange={(e) => setPostData({ ...postData, content: e.target.value})} name="content" id="content" value={postData.content}/>
      </FormGroup>
      <FormGroup>
        <Label for="tags">Tags</Label>
        <Input type="text" onChange={(e) => setPostData({ ...postData, tags: e.target.value})} name="tags" id="tags" placeholder="Enter Tags" value={postData.tags}/>
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>);
}

export default Forms;