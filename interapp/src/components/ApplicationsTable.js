import React, { useState, useEffect } from 'react';
import Pagination from './common/pagination';
import { paginate } from '../services/paginationService';
import Filters from './common/filtering';
import {getStages} from '../services/stagesService';
import HistoryTable from './HistoryTable';
// import AppForm from '../AppForm';
import "../css/designs.css"

const applyFilters = (selectedStage, tableData) => {
  return selectedStage && selectedStage !== "All Stages"
    ? tableData.filter(p => p.Stage === selectedStage)
    : tableData;
}

export default function ApplicationsTable() {
  //initialize tableData as empty when working with backend, and process data in useEffect()
  const [tableData, setTableData] = useState([]);
 
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [stages] = useState([{stage: 'All Stages'}, ...getStages()]);
  const [selectedStage, setSelectedStage] = useState("All Stages");
  
  const [filtered, setFiltered] = useState(applyFilters(selectedStage, tableData));
  //apply filters before pagination
  const [posts, setPosts] = useState(paginate(filtered, currentPage, pageSize));
  // const [editPost, setEditPost] = useState({});
  console.dir(posts);

  const fetchData = async function () {
    const _posts = await fetch("/applications")
    .then(res => res.json());
    setTableData(_posts);
  }

  const deleteData = async function (post) {
    const response = await fetch('/delAppPost', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(post)
    }).then(res => res.json());
    console.log(response);
    if(response.success) {
      alert(response.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  

  useEffect(() => {
    setPosts(paginate(filtered, currentPage, pageSize));
  }, [filtered, currentPage, pageSize]);

  useEffect(() => {
    setFiltered(applyFilters(selectedStage, tableData))
  }, [tableData, selectedStage]);
    


  const handleDelete = (post) => {
    console.log("Post to be deleted:", post);
    const newPosts = tableData.filter(p => p._id !== post._id);
    setTableData(newPosts);
    deleteData(post);
  }

  const handleEdit = (post) => {
    console.log('Edit this post:', post);
    // setEditPost(post);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleStageSelect = (selected) => {
    setSelectedStage(selected.stage);
    setCurrentPage(1);
  }



  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <div className="row">
          <div className="col-2">
            <Filters 
              items={stages} 
              textProperty="stage"
              valueProperty="id"
              onItemSelect={handleStageSelect}
              selectedItem={selectedStage}
            />
          </div>
        {
          (filtered.length !== 0) 
            ? 
              <div className="col">
                <p>Showing {filtered.length} applications from the database</p>
                <HistoryTable 
                  posts={posts}
                  onDelete = {handleDelete}
                  onEdit = {handleEdit}
                />
                <Pagination 
                  itemsCount={filtered.length}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
                {/* <AppForm edit={true} itemDetails={{
                  Company: "RANDOM",
                  DateApplied: "",
                  JobDescription: "",
                  RecruiterInfo: "",
                  Role: "",
                  Stage: "",
                  StageDate: "",
                  Type: ""
                }}/> */}
              </div> 
          : <p>There are no applications in the database</p>
      }
      </div>  
    </div>
  );
}