import React, { useState, useEffect } from 'react'
import FileUploadScreen from '../screens/FileUploadScreen'
import { getSingleFiles, getMultipleFiles } from '../data/api';

function AddProduct() {
    const [singleFiles, setSingleFiles] = useState([]);
    const [multipleFiles, setMultipleFiles] = useState([]);
    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
            console.log(error);
        }
    }
    const getMultipleFilesList = async () => {
        try {
            const fileslist = await getMultipleFiles();
            setMultipleFiles(fileslist);
            console.log(multipleFiles);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleFileslist();
        getMultipleFilesList();
    }, []);

    return (
        <div style={{marginTop:250}}>
            <div className="container">
                <h3 className="text-danger font-weight-bolder border-bottom text-center">Upload Products</h3>
                <FileUploadScreen getsingle={() => getSingleFileslist()} getMultiple={() => getMultipleFilesList()} />
            </div>
        </div>
    )
}

export default AddProduct