@extends('Layout.app')

@section('title','Laravel Axios Multiple File Uploader')

@section('content')

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="card">

        <div class="card-header">
          <h5>Laravel Axios Multiple File Uploader</h4>
        </div>


        
        <div class="card-body">
        <button class="btn btn-primary btn-sm">Add Files</button>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>File</th>
                <th>File Size</th>
                <th>Cancel</th>
                <th>Upload</th>
                <th>Uploaded(MB)</th>
                <th>Uploaded(%)</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>File</td>
                <td>File Size</td>
                <td><button class="btn btn-danger btn-sm">Cancel</button></td>
                <td><button class="btn btn-primary btn-sm">Upload</button></td>
                <td>Uploaded(MB)</td>
                <td>Uploaded(%)</td>
                <td>Status</td>
              </tr>
            </tbody>
          </table>
        <div>
      </div>
    </div>
  </div>
</div>

@endsection