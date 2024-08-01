import { useEffect, useState } from 'react'
import { Button, Col, Collapse, Image, Row, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import { EvaluationBlock } from '@shared/evaluationBlock'
import { Arrow, Info } from '@shared/svg'
import doma from '@shared/image/png/doma.png'
import './EvaluationResult.css'
import { dataEvaluations } from '../consts'
import { buttonText, evaluationCollapseTitle, evaluationResultParagraph, evaluationResultTitle, infoBlockText } from './EvaluationResult.styles'

export const EvaluationResult = () => {

    const [districtEstimate, setDistrictEstimate] = useState('');
    const [realtyComplexEstimate, setRealtyComplexEstimate] = useState('');
    const [flatEstimate, setFlatEstimate] = useState('');


    useEffect(() => {
        const handleMessage = (event) => {
            if (event.source === window && event.data.district && event.data.realtyComplex && event.data.flate) {
                setDistrictEstimate(event.data.districtEstimate);
                setRealtyComplexEstimate(event.data.realtyComplex);
                setFlatEstimate(event.data.flate);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    useEffect(() => {

        const defXSS = (html) => {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent;
        };

        if (window && document) {
            const script = document.createElement('script')
            const body = document.getElementsByTagName('body')[0]
            script.src = './cors.js'
            body.appendChild(script)
        }

        const handleMessage = (event) => {
            if (event.source === window && event.data.district && event.data.realtyComplex && event.data.flate) {
                setDistrictEstimate(defXSS(event.data.district));
                setRealtyComplexEstimate(defXSS(event.data.realtyComplex));
                setFlatEstimate(defXSS(event.data.flate));
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [])

    const panelStyle = {
        marginBottom: 21,
        border: '1px solid rgba(240, 238, 238, 1)',
        borderRadius: '10px',
        boxShadow: '0px 0px 35px 0px rgba(66, 98, 180, 0.1)',
        padding: '9px 11px 11px',
    };

    const getItemsCollaps = (panelStyle) => {
        return [
            {
                key: '1',
                label: <div className="itemCollapce">
                    <div className={`circle y`}>3</div>
                    <Title style={evaluationCollapseTitle}>
                        Оценка инфраструктуры и района
                    </Title>
                </div>,
                children: <p id='estimates-district'>{districtEstimate}</p>,
                style: panelStyle
            },
            {
                key: '2',
                label: <div className="itemCollapce">
                    <div className={`circle g`}>4</div>
                    <Title style={evaluationCollapseTitle}>
                        Оценка инфраструктуры и района
                    </Title>
                </div>,
                children: <p id='estimates-district'>{realtyComplexEstimate}</p>,
                style: panelStyle
            },
            {
                key: '3',
                label: <div className="itemCollapce">
                    <div className={`circle y`}>3</div>
                    <Title style={evaluationCollapseTitle}>
                        Оценка инфраструктуры и района
                    </Title>
                </div>,
                children: <p id='estimates-district'>{flatEstimate}</p>,
                style: panelStyle
            },
        ];
    }


    return (
        <div className='evaluationResult'>
            <div className='container'>
                <div className="evaluationResultBlock">
                    <div className="containerComponent">
                        <div className="evaluationResultTitle">
                            <Typography>
                                <Title style={evaluationResultTitle}>
                                    Результаты оценки
                                </Title>
                                <Paragraph style={evaluationResultParagraph}>
                                    Отчёт о квартире по адресу: Москва, НАО (Новомосковский), Коммунарка поселок, Бунинские Луга жилой комплекс, 3.4.1 <br />
                                    Квартира опубликована на следующих площадках: cian, domclick
                                </Paragraph>
                            </Typography>
                        </div>
                        <div className="evaluationResultMain">
                            <Row gutter={54}>
                                <Col span={8}>
                                    {dataEvaluations.map((dataEvaluation, i) => {
                                        return <EvaluationBlock
                                            title={dataEvaluation.title}
                                            desc={dataEvaluation.desc}
                                            digits={dataEvaluation.digits}
                                            color={dataEvaluation.color}
                                        />

                                    })}
                                    <Image
                                        src={doma}
                                    />
                                </Col>

                                <Col span={16}>
                                    <Collapse
                                        bordered={false}
                                        accordion
                                        style={{
                                            background: 'none'
                                        }}
                                        expandIcon={({ isActive }) => <Arrow rotate={isActive ? 0 : -90} />}
                                        expandIconPosition='end'
                                        items={getItemsCollaps(panelStyle)}
                                    />
                                    <div className="infoBlock">
                                        <div className="infoBlockText">
                                            <Info />
                                            <Paragraph style={infoBlockText}>
                                                Для того чтобы понять, какие параметры влияют на стоимость квартиры, нажмите на кнопку “Подбробный отчет”.
                                            </Paragraph>
                                        </div>
                                        <div className="buttonInfoBlock">
                                            <Button type="primary" size={'large'} block>
                                                <Title style={buttonText} level={5}>Подробный отчет</Title>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
