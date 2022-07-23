import {PostsType , TFormData} from "./types/types";
import {useState , useEffect} from 'react';
import CreateButton  from './components/CreateButton';
import TabControlButton  from './components/TabControlButton';
import Loading  from './components/Loading';
import MapWrapper from './components/Map';
import DataTable from './components/DataTable';
import Modal from './components/Modal';
import Form from './components/Form';
import './styles.css';
import useFetchList from './hooks/useFetchList';
import useCreatePost from './hooks/useCreatePost';
import useRemovePost from './hooks/useRemovePost';
import useUpdatePost from './hooks/useUpdatePost';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



function App() {
    const tabNames = { list: 1, map: 2 };
    const [activeTab, setActiveTab] = useState(tabNames.list);
    const [citys, setCitys] = useState<PostsType[]>([])
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { data,  isLoading , refresh } = useFetchList();
    const {update} = useUpdatePost();
    const { response,  postData } = useCreatePost();
    const { removeData } = useRemovePost();
    const [formData , setFormData] = useState<TFormData>({
      id: 0,
      title: '',
      content: '',
      lat: '',
      long: '',
      image_url: '',
    })
    useEffect(()=>{
      setCitys(data);
      if(response){
        setModalVisible(false);
      }
  },[data , response])

    const handleCreate = ()=>{
      setModalVisible(true);
    }

    useEffect( () => {
      if(!modalVisible){
        setFormData({
          id: 0,
          title: '',
          content: '',
          lat: '',
          long: '',
          image_url: '',
        })
      }
    },[modalVisible])

    const handleInputChange = (event:any) => {
      const target = event.target;

      setFormData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    };

    const onSubmit = async(e: React.SyntheticEvent)=>{
      e.preventDefault();
      const target = e.target as typeof e.target & {
        title: { value: string };
        content: { value: string };
        lat: { value: string };
        long: { value: string };
        image_url: { value: string };
        id : { value: number };
      };
      const newData = {
        title: target.title.value,
        content: target.content.value,
        lat: target.lat.value,
        long: target.long.value,
        image_url: target.image_url.value,
      }
      if(target.id.value != 0){
        await update( newData , target.id.value);
      }else{
        await postData(newData);
      }
      refresh();
    }

    const handleEditData = (id:number) => {
      const editData = citys.find(item => item.id === id);
      setFormData((prevData) => ({
        ...prevData,
        ...editData
      }));
    setModalVisible(true);
    }
    const handleDeleteData = async(id:number)=>{
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you wish to delete this post?',
        buttons: [
          {
            label: 'Yes',
            onClick: ()=>removePost(),
          },
          {
            label: 'No',
          },
        ],
      });
      async function removePost(){
        await removeData(id);
        refresh();
      }
    }
    return (
        <div className="app-root">
          <div className="top-bar">
         </div>
          <div className="app-container">
            <div className="tab-container">
              <TabControlButton onClick={() => setActiveTab(tabNames.list)} label = "List" selected= {activeTab==tabNames.list} />
              <TabControlButton onClick={() => setActiveTab(tabNames.map)} label = "Map" selected={activeTab==tabNames.map} />
              <CreateButton onClick={handleCreate} />
            
            </div>
            <div className="body-container">
            <Loading loading={isLoading}>
            {activeTab === tabNames.list && (
                <DataTable data={citys} handleEditData={handleEditData} handleDeleteData={handleDeleteData}></DataTable>

            )}
            {activeTab === tabNames.map && (
               <MapWrapper data={citys}></MapWrapper>
            )}
            </Loading>
            </div>
          </div>
          <Modal title={formData.id != 0 ? "Edit Post" : "New Post"} onClose={() => setModalVisible(false)} show={modalVisible}>
          <Form onSubmit={onSubmit} handleInputChange={handleInputChange} formData ={formData}></Form>
        </Modal>
        </div>
    );
}

export default App;