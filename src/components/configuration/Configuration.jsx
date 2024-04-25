import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Order from '../order/Order';

export default function SimpleContainer() {
  const [options, setOptions] = useState({
    cpu: 0,
    ram: 0,
    ssd: 0,
    hdd: 0,
    additionalDisk: 0,
    features: {
      cpu: false,
      powerSupply: false,
      kvmConsole: false,
      privateNetwork: false,
    },
  });

  const maxValues = {
    cpu: 40,
    ram: 256,
    ssd: 2048,
    hdd: 10000,
    additionalDisk: 10000,
  };

  const prices = {
    cpu: 25,
    ram: 50,
    ssd: 5,
    hdd: 8,
    additionalDisk: 2,
    features: {
      cpu: 10,
      powerSupply: 15,
      kvmConsole: 20,
      privateNetwork: 30,
    },
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  const handleFeatureChange = (feature) => {
    setOptions({
      ...options,
      features: {
        ...options.features,
        [feature]: !options.features[feature],
      },
    });
  };

  const resetFilters = () => {
    setOptions({
      cpu: 0,
      ram: 0,
      ssd: 0,
      hdd: 0,
      additionalDisk: 0,
      features: {
        cpu: false,
        powerSupply: false,
        kvmConsole: false,
        privateNetwork: false,
      },
    });
  };

  const total = () => {
    let sum = 0;
    Object.keys(options).forEach((option) => {
      if (option !== 'features') {
        sum += options[option] * prices[option];
      }
    });
    Object.keys(options.features).forEach((feature) => {
      if (options.features[feature]) {
        sum += prices.features[feature];
      }
    });
    return sum;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'white',
            padding: '20px',
            marginTop: "-5%",
            '@media (max-width:600px)': {
              height: 'auto',
            },
          }}
        >
          <Typography variant="h5" gutterBottom>
            Процессоры
          </Typography>
          <Typography variant="body1" gutterBottom>
            CPU 1CPU = 25с/мес (макс: {maxValues.cpu})
          </Typography>
          <Slider
            value={options.cpu}
            onChange={(event, newValue) => handleChange('cpu', newValue)}
            min={0}
            max={maxValues.cpu}
            step={1}
            valueLabelDisplay="auto"
          />

          <Typography variant="h5" gutterBottom>
            Оперативная память
          </Typography>
          <Typography variant="body1" gutterBottom>
            RAM 1гб = 50с/мес (макс: {maxValues.ram})
          </Typography>
          <Slider
            value={options.ram}
            onChange={(event, newValue) => handleChange('ram', newValue)}
            min={0}
            max={maxValues.ram}
            step={1}
            valueLabelDisplay="auto"
          />

          <Typography variant="h5" gutterBottom>
            Диск
          </Typography>
          <Typography variant="body1" gutterBottom>
            SSD/NVME 1гб = 5с/мес (макс: {maxValues.ssd})
          </Typography>
          <Slider
            value={options.ssd}
            onChange={(event, newValue) => handleChange('ssd', newValue)}
            min={0}
            max={maxValues.ssd}
            step={1}
            valueLabelDisplay="auto"
          />
          <Typography variant="body1" gutterBottom>
            HDD/Backup 1гб = 8с/мес (макс: {maxValues.hdd})
          </Typography>
          <Slider
            value={options.hdd}
            onChange={(event, newValue) => handleChange('hdd', newValue)}
            min={0}
            max={maxValues.hdd}
            step={1}
            valueLabelDisplay="auto"
          />

          <Typography variant="h5" gutterBottom>
            Дополнительный диск
          </Typography>
          <Typography variant="body1" gutterBottom>
            Для хранения 1гб = 2с/мес (макс: {maxValues.additionalDisk})
          </Typography>
          <Slider
            value={options.additionalDisk}
            onChange={(event, newValue) => handleChange('additionalDisk', newValue)}
            min={0}
            max={maxValues.additionalDisk}
            step={1}
            valueLabelDisplay="auto"
          />

          <Typography variant="h5" gutterBottom>
            Особенности
          </Typography>
          <FormControlLabel
            control={<Checkbox checked={options.features.cpu} onChange={() => handleFeatureChange('cpu')} />}
            label="CPU"
          />
          <FormControlLabel
            control={<Checkbox checked={options.features.powerSupply} onChange={() => handleFeatureChange('powerSupply')} />}
            label="2 блока питания"
          />
          <FormControlLabel
            control={<Checkbox checked={options.features.kvmConsole} onChange={() => handleFeatureChange('kvmConsole')} />}
            label="KVM-консоль"
          />
          <FormControlLabel
            control={<Checkbox checked={options.features.privateNetwork} onChange={() => handleFeatureChange('privateNetwork')} />}
            label="Приватная сеть"
          />
         <Typography variant="body1" gutterBottom>
            Итого: {total()}с/мес
          </Typography>
          <Button variant="contained" color="grey" onClick={resetFilters}>
            Сбросить фильтры
          </Button>
          <Button variant="contained" color="primary" onClick={handleOpen} sx={{ backgroundColor: 'green', marginLeft: "3%" }}>
              Заказать
           </Button>


          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ваш заказ</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom>
                Выбранные опции:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Процессоры: {options.cpu} (Цена: {options.cpu * prices.cpu}с/мес)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Оперативная память: {options.ram}гб (Цена: {options.ram * prices.ram}с/мес)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Диск SSD/NVME: {options.ssd}гб (Цена: {options.ssd * prices.ssd}с/мес)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Диск HDD/Backup: {options.hdd}гб (Цена: {options.hdd * prices.hdd}с/мес)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Дополнительный диск: {options.additionalDisk}гб (Цена: {options.additionalDisk * prices.additionalDisk}с/мес)
              </Typography>
              <Typography  variant="h6" gutterBottom>
                Итого: {total()}с/мес
              </Typography>
            </DialogContent>
            <DialogContent>
              <Typography variant="h6" gutterBottom>
                Как можно оплатить:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Мбанк: +996501304053
              </Typography>
              <Typography variant="body1" gutterBottom>
                О!Деньги: +996501304053
              </Typography>
              <Button
                sx={{ marginTop: "5px", backgroundColor: "green", width: "200px", height: "40px" }}
                variant="contained"
                color="success"
                component="label"
                  >
               Прикрепить чек
                <input type="file" style={{ display: "none" }} />
                  </Button>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Закрыть</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
      <Order/>
    </React.Fragment>
  );
}