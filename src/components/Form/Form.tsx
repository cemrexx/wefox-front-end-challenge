import React from 'react';
import { TFormData} from "../../types/types";
import './styles.css';

interface IFormProps  {
  formData: TFormData;
  handleInputChange: (event:any) => void;
  onSubmit: (e: React.SyntheticEvent) => void;

}

export const Form:  React.FC<IFormProps> = (props) => {
  const {onSubmit , formData , handleInputChange } = props;
  return (
    <form onSubmit={onSubmit}>
    <div className="form-item">
      <label htmlFor="title">Title:</label>
      <br />
      <input
        className="form-input"
        id="title"
        name="title"
        onChange={handleInputChange}
        required
        type="text"
        value={formData?.title}
        placeholder="Title"
      />
    </div>
    <div className="form-item">
      <input
        className="form-input"
        id="id"
        name="id"
        onChange={handleInputChange}
        value={formData?.id}
        type="hidden"

      />
    </div>

    <div className="form-item">
      <label htmlFor="content">Content:</label>
      <br />
      <textarea
        className="form-input"
        id="content"
        name="content"
        onChange={handleInputChange}
        required
        value={formData?.content}
        placeholder="Content"
      />
    </div>

    <div className="form-item">
      <label htmlFor="image_url">Image:</label>
      <br />
      <input
        className="form-input"
        id="image_url"
        name="image_url"
        onChange={handleInputChange}
        type="text"
        value={formData?.image_url}
        placeholder="Image Url"
      />
    </div>

    <div className="form-item">
      <label htmlFor="lat">Latitude:</label>
      <br />
      <input
        className="form-input"
        id="lat"
        max={90}
        min={-90}
        name="lat"
        onChange={handleInputChange}
        step="0.000001"
        type="number"
        value={formData?.lat}
        placeholder="Latitude"
      />
    </div>

    <div className="form-item">
      <label htmlFor="long">Longitude:</label>
      <br />
      <input
        className="form-input"
        id="long"
        max={180}
        min={-180}
        name="long"
        onChange={handleInputChange}
        step="0.000001"
        type="number"
        value={formData?.long}
        placeholder="Longitude"
      />
    </div>   
    <div className="modal-footer">
    <button className="button form" type="submit">
          Submit
    </button>
    </div>  
  </form>
  )

 
};
export default Form;
