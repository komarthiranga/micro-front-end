import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Kristal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fund Strategy" {...a11yProps(0)} />
          <Tab label="Returns" {...a11yProps(1)} />
          <Tab label="Scheme Information" {...a11yProps(2)} />
          <Tab label="Fact Sheets" {...a11yProps(3)} />
          <Tab label="Issuer Description" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        SeaTown Private Capital Feeder Fund LP, is a Singaporean limited partnership created to invest in SeaTown Private Capital Master Fund (the ‘Fund’). The Fund invests in global growth-oriented private equity investments across a variety of industries with a focus on Consumer & Technology. Most investments (70-80%) will be via minority participation in Growth Equity of late stage startup & mature companies. The balance will be in company buyouts as part of a consortium. Market familiarity and long-standing relationships enable the fund to invest in Asia (~50%), while its ability to leverage Temasek’s global network allows it to tap into developed markets. The Fund is targeting a portfolio of 15-20 investments with an average of USD 50m per investment and a single asset concentration limit of 20%.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Seatown is a global investment company, indirectly wholly-owned by Temasek Holdings. It manages USD 7b across different investment strategies- Multi asset, Credit and Private Capital. Temasek is one of the largest investment groups that manages a global AUM of USD 283B through a strong team of 800+ employees operating from 13 offices spread across 9 countries in 3 continents. While Seatown is independent of Temasek, it benefits from Temasek’s industry knowledge and experience and a deep network of potential business connections. The Investment Manager is regulated by MAS (Singapore) and holds additional licences to invest in China from China Securities Regulatory Commission.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Seatown is a global investment company, indirectly wholly-owned by Temasek Holdings. It manages USD 7b across different investment strategies- Multi asset, Credit and Private Capital. Temasek is one of the largest investment groups that manages a global AUM of USD 283B through a strong team of 800+ employees operating from 13 offices spread across 9 countries in 3 continents. While Seatown is independent of Temasek, it benefits from Temasek’s industry knowledge and experience and a deep network of potential business connections. The Investment Manager is regulated by MAS (Singapore) and holds additional licences to invest in China from China Securities Regulatory Commission.
      </TabPanel>
      <TabPanel value={value} index={3}>
      Seatown is a global investment company, indirectly wholly-owned by Temasek Holdings. It manages USD 7b across different investment strategies- Multi asset, Credit and Private Capital. Temasek is one of the largest investment groups that manages a global AUM of USD 283B through a strong team of 800+ employees operating from 13 offices spread across 9 countries in 3 continents. While Seatown is independent of Temasek, it benefits from Temasek’s industry knowledge and experience and a deep network of potential business connections. The Investment Manager is regulated by MAS (Singapore) and holds additional licences to invest in China from China Securities Regulatory Commission.
      </TabPanel>
      <TabPanel value={value} index={4}>
      Seatown is a global investment company, indirectly wholly-owned by Temasek Holdings. It manages USD 7b across different investment strategies- Multi asset, Credit and Private Capital. Temasek is one of the largest investment groups that manages a global AUM of USD 283B through a strong team of 800+ employees operating from 13 offices spread across 9 countries in 3 continents. While Seatown is independent of Temasek, it benefits from Temasek’s industry knowledge and experience and a deep network of potential business connections. The Investment Manager is regulated by MAS (Singapore) and holds additional licences to invest in China from China Securities Regulatory Commission.
      </TabPanel>
    </Box>
  );
}