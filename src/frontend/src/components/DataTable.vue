<script lang="ts" src="./DataTable.ts"></script>

<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ title }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <div class="dataTables_wrapper dt-bootstrap4">
                <div class="row mb-2">
                    <div class="col-sm-12 col-md-6">
                        <div class="dt-buttons btn-group flex-wrap">
                            <slot name="actions"></slot>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-striped dataTable dtr-inline">
                            <thead>
                                <tr>
                                    <th v-for="(item, index) in headlines" class="sorting">{{ item }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(items, index) in data" :class="index % 2 === 0 ? 'even' : 'odd'">
                                    <td v-for="(item) in items">{{ item }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing {{ data.length }} entries</div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="example1_previous"><a
                                        href="#" aria-controls="example1" data-dt-idx="0" tabindex="0"
                                        class="page-link">Previous</a>
                                </li>
                                <li class="paginate_button page-item active"><a href="#" aria-controls="example1"
                                        data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example1"
                                        data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example1"
                                        data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example1"
                                        data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example1"
                                        data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example1"
                                        data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                <li class="paginate_button page-item next" id="example1_next"><a href="#"
                                        aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.card-body -->
    </div>
</template>

