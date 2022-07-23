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
  }[],
  handleEditData: (id:number) => void;
  handleDeleteData: (id:number) => void;
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
  const handleEdit =(val: any)=>{
    handleEditData(val.id);

  }
  const handleDelete =(val: any)=>{
   handleDeleteData(val.id);
  }

  function ActionRow(id:any){

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
        {data.map((item: any) => (
          <>
            <div className="data-table-item" key={item.id}>
              {columns.map((column:Column) => (
                <>
                      {column.id == 'actions'
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

          </>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
