import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import * as XLSX from 'xlsx';
import axios from 'axios';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../../../../../assets/css/tabla.css';

interface Subarea {
    co_subarea: string;
    nb_subarea: string;
    co_area: string,
}

// Definición inicial de filtros para el DataTable
const initialFilters = {
    // El valor puede ser 'string' o 'null'
    global: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
};


function TableSubarea() {
    const [area, setAreas] = useState<Subarea[]>([]);
    const [cargando, setCargando] = useState(true);
    // Estado para manejar los filtros de la tabla
    const [filters, setFilters] = useState(initialFilters);
    // Estado para el valor del campo de búsqueda (controlado)
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        axios.get<Subarea[]>('http://localhost:8080/basetomee/subarea/list')
            .then(response => {
                setAreas(response.data);
                setCargando(false);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los registros:', error);
                setCargando(false);
            });
    }, []);

    // FUNCION PARA EXPORTAR A EXCEL
    const exportExcel = () => {
        // Mapear los datos a un formato más legible si es necesario,
        // o simplemente usa el arreglo de empresas.
        const dataForExport = area.map(subarea => ({
            "Id": subarea.co_area,
            "Nombre Subarea": subarea.co_subarea,
            "Id Area": subarea.co_area,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataForExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Subarea");

        XLSX.writeFile(workbook, "subareas_data.xlsx");
    };

    // FUNCION CORREGIDA
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);

        setGlobalFilterValue(value);
    };

    // Campos en los que se aplicará la búsqueda global
    const globalFilterFields = [
        'co_subarea',
        'nb_subarea',
        'co_area',
    ];

    if (cargando) return <p>Cargando registros...</p>;

    return (
        <>
            {/* Input de Búsqueda Global (Fuera del DataTable) */}

            <div className="table-empresa">
                <div className="options">
                    <div className="group-btn">
                            <div className="p-input-icon-left" >
                                <i className="pi pi-search" />
                                <InputText style={{ background: '#fffffff6', border: 'solid 1px #7776b352', padding: '13px', borderRadius: 5, color: '#333', width: '300px', outline: 'none' }}
                                    value={globalFilterValue}
                                    onChange={onGlobalFilterChange}
                                    placeholder="Buscar..."
                                />
                            </div>

                            <Button style={{ color: '#5A639C', fontSize: '20px', padding: '13px',marginLeft: '10px', background: '#BBFCFC' }}
                                type="button"
                                icon="pi pi-file-excel"
                                className="p-button-success"
                                onClick={exportExcel}
                                disabled={area.length === 0} // Desactivar si no hay datos
                            ><FileDownloadIcon sx={{ fontSize: 15 }} /></Button>
                    </div>
                </div>

                <DataTable
                    value={area}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator
                    rows={10}
                    emptyMessage="No se encontraron registros relacionados"
                    className="tabla-empresa"
                    paginatorClassName="mi-paginador-personalizado"
                    // Propiedades para el filtro global
                    filters={filters} // Se pasa el objeto de filtros actualizado
                    globalFilterFields={globalFilterFields} // Se indican las columnas a filtrar
                >
                    <Column field="co_subarea" header="Id"></Column>
                    <Column field="nb_subarea" header="Nm Subarea"></Column>
                    <Column field="co_area" header="Id Area"></Column>
                </DataTable>
            </div>
        </>
    )
}

export default TableSubarea;