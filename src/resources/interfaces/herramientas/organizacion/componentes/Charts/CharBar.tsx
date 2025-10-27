import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

// Define las propiedades básicas del medidor que no cambian
const gaugeBaseSettings = {
    width: 200,
    height: 200,
};

// Interfaz para las propiedades (props) del componente
interface ArcDesignProps {
    title: string;
    data: number;
}

/**
 * Componente que renderiza un medidor (Gauge) de Material-UI con un diseño de arco personalizado.
 * @param {ArcDesignProps} props - Las propiedades del componente.
 */
function ArcDesign({ title, data }: ArcDesignProps) {
    return (
        <div style={{ textAlign: 'center' }}>
            <small style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>
                {title}
            </small>

            <Gauge
                {...gaugeBaseSettings} // Propiedades base (width, height)
                value={data} // El valor dinámico pasado por props
                cornerRadius="50%" 
                
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#2733F5', // Color celeste claro
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled, 
                    },
                })}
            />
        </div>
    );
}

export default ArcDesign;

