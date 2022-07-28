import React, {Key} from 'react';
import './styles.css';


const classNames = require('classnames');


type Column ={
    id: string,
    name: string;
    width: string;
}
interface IPostsProps {
  data: {
    id: number; 
    content: string;
    title: string;
  }[],
  handleEditData: (id:number) => void;
  handleDeleteData: (id:number) => void;
}
interface ActionProps {
  id: number;
}

interface RowType {
  [key: string]: any;
}


const DataTable : React.FC<IPostsProps>= ({  data, handleEditData, handleDeleteData }) => {


  const className = classNames({
    'data-table': true,
  });
  const columns = [
    {
      id: 'title',
      name: 'Title',
      width: '20%',
    },
    {
      id: 'content',
      name: 'Content',
      width: '80%',
    },
    {
      id: 'actions',
      name: 'Actions',
      width: '10%',
    }
  ];
  const handleEdit =(id: number)=>{
    handleEditData(id);

  }
  const handleDelete =(id: number)=>{
   handleDeleteData(id);
  }

  const  ListItem : React.FC<RowType> = (props) => {   
    const { item  } = props; 
    return (
      <div className="data-table-item" key={item.id as Key}>
      {columns.map((column:Column) => (
        <>
              {column.id === 'actions'
            ? (
              <div className="data-table-item-column" style={{ width: column.width }}>
              <ActionRow id={item.id}></ActionRow>
              </div>
            )
            : (
              <div className="data-table-item-column" style={{ width: column.width }}>
                <div> {item[column.id]}</div>
              </div>
            )}     
        </>
      ))}
    </div>
    )
  }

  const  ActionRow : React.FC<ActionProps>=({id}) =>{

    return(
      <div className="action-row">
        <button onClick= {()=>{handleEdit(id)}}>
            <div className="table-icon icon-edit" />
        </button>
        <button onClick= {()=>{handleDelete(id)}}>
        <div className="table-icon icon-delete" />
        </button>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="data-table-header">
        {columns.map((column:Column) => (
          <div className="data-table-header-column" style={{ width: column.width }}>
            <div> {column.name}</div>

          </div>
        ))}
      </div>
      <div className="data-table-body">
        {data.map((item: RowType) => (
            <ListItem item={item} key={item.id}  />
        ))}
      </div>
    </div>
  );
};

export default DataTable;
