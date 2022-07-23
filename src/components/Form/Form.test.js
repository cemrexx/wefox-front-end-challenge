import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  userEvent  from '@testing-library/user-event';

import Form from './Form';

test('form renders correctly',()=>{
    const {getByPlaceholderText } = render( <Form /> )
    expect(getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Content/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Image/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Latitude/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Longitude/i)).toBeInTheDocument();
    
});
test('submit button works',()=>{
    const {getByRole, getByPlaceholderText } = render( <Form /> )
    const submitButton = getByRole('button', {name: /submit/i});
    const titleInput = getByPlaceholderText(/Title/i);
    const contentInput = getByPlaceholderText(/Content/i);
    const imageInput = getByPlaceholderText(/Image/i);
 
    userEvent.type(titleInput, 'test title');
    userEvent.type(contentInput, 'test content');
    userEvent.type(imageInput, 'test image');

    fireEvent.click(submitButton);
    expect(titleInput.value).toBe('test title');
    expect(contentInput.value).toBe('test content');
    expect(imageInput.value).toBe('test image');

    
});
