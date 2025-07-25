/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

const ScanBeforeClearZero = () => {
  const [formData, setFormData] = useState({
    barcode: '',
    productionBatch: '10',
    agingBatch: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Scan Submitted:', formData)
    alert(
      `Barcode: ${formData.barcode}\nProduction Batch: ${formData.productionBatch}\nAging Batch: ${formData.agingBatch}`,
    )
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Scan Before Clear Zero</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              {/* Barcode */}
              <CRow className="mb-3">
                <CFormLabel htmlFor="FormBarcodeInput" className="col-sm-2 col-form-label">
                  Barcode
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    id="FormBarcodeInput"
                    name="barcode"
                    value={formData.barcode}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              {/* Production Batch */}
              <CRow className="mb-3">
                <CFormLabel htmlFor="FormBatchProductionInput" className="col-sm-2 col-form-label">
                  Production Batch
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    id="FormBatchProductionInput"
                    name="productionBatch"
                    value={formData.productionBatch}
                    readOnly
                  />
                </CCol>
              </CRow>

              {/* Aging Batch */}
              <CRow className="mb-3">
                <CFormLabel htmlFor="FormBatchAgingInput" className="col-sm-2 col-form-label">
                  Aging Batch
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="number"
                    id="FormBatchAgingInput"
                    name="agingBatch"
                    value={formData.agingBatch}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              {/* Submit */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" type="submit">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ScanBeforeClearZero
