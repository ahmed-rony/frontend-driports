import React, { useState } from 'react';
import './Register.scss';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, StepLabel } from '@mui/material';
import PricePlan from 'components/PricePlan/PricePlan';
import TableForm from 'components/TableForm/TableForm';
import PaymentGateway from 'components/PaymentGateway/PaymentGateway';

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const allStepsCompleted = () => {
        return activeStep === 3;
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    
    const nextStep = () => {
        setActiveStep((activeStep < 2) ? activeStep + 1 : activeStep)
    }

    const prevStep = () => {
        setActiveStep((activeStep > 0) ? activeStep - 1 : activeStep)
    }

    return (
        <div className='payment'>
            <div className="title">
                <h1>Pick a Plan to Register</h1>
            </div>
            <Box>
                <Stepper className='steppers' activeStep={activeStep}>
                    <Step>
                        <StepLabel>Plans</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Register</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Payment</StepLabel>
                    </Step>
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <Paper elevation={3} >
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </Paper>
                    ) : (
                        <section>
                            {(activeStep === 0 && <PricePlan />)}
                            {(activeStep === 1 && <TableForm />)}
                            {(activeStep === 2 && <PaymentGateway />)}
                        </section>
                    )}
                </div>
                <div className='stepper-btn'>
                    <button className={activeStep === 0 && `d-none`} onClick={() => prevStep()}>Previous</button>
                    <button className={activeStep === 2 && `d-none`} onClick={() => nextStep()}>Next</button>

                </div>
            </Box>
        </div>
    );
};

export default Payment;