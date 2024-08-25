import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select } from '@chakra-ui/react'
import Transactions from '../Transaction'

const Operations = () => {
  return (
    <Tabs variant='soft-rounded' overflow={'hidden'} colorScheme='blue'>
      <TabList overflowX={'auto'} padding={'2'} >
        <Tab>Trasanctions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Transactions/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Operations