import React from 'react'
import * as s from '@chakra-ui/react'  
import * as svg from 'react-icons/fi'
import MyChart from '../components/myChart'

const Dashboard = () => {
    return (
        <s.Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px" >
        {/* column 1 */}
        <s.Flex
            w="15%"
            flexDir="column"
            alignItems="center"
            backgroundColor="#020202"
            color="#fff">
                <s.Flex
                flexDir="column"
                justifyContent="space-between"
                h="100vh">
                    <s.Flex
                    flexDir="column"
                    as="nav">
                        <s.Heading
                        mt={50}
                        mb={100}
                        fontSize="4xl"
                        alignSelf="center"
                        letterSpacing="tight">
                            Rise.
                        </s.Heading>
                        <s.Flex
                        flexDir="column"
                        align="flex-start"
                        justifyContent="center">
                            <s.Flex className="sidebar-items">
                                <s.Link>
                                    <s.Icon as={svg.FiHome} fontSize="2xl" className="active-icon"/>
                                </s.Link>
                                <s.Link _hover={{textDecor: 'none'}}>
                                    <s.Text className="active">Home</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items">
                                <s.Link>
                                    <s.Icon as={svg.FiPieChart} fontSize="2xl"/>
                                </s.Link>
                                <s.Link _hover={{textDecor: 'none'}}>
                                    <s.Text>Credit</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items">
                                <s.Link>
                                    <s.Icon as={svg.FiDollarSign} fontSize="2xl" />
                                </s.Link>
                                <s.Link _hover={{textDecor: 'none'}}>
                                    <s.Text>Wallet</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items">
                                <s.Link>
                                    <s.Icon as={svg.FiBox} fontSize="2xl"/>
                                </s.Link>
                                <s.Link _hover={{textDecor: 'none'}}>
                                    <s.Text>Services</s.Text>
                                </s.Link>
                            </s.Flex>
                        </s.Flex>
                    </s.Flex>
                    <s.Flex
                        flexDir="column"
                        alignItems="center"
                        mb={10}
                        mt={5}>
                        <s.Avatar my={2} src="profile.jpeg"/>
                        <s.Text>Murilo Gomes</s.Text>
                    </s.Flex>
                </s.Flex>
        </s.Flex>
        {/* column 2 */}
        <s.Flex
            w="55%"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            >
        </s.Flex>
        {/* column 3 */}
        <s.Flex
        w="35%"
        bgColor="#f5f5f5"
        p="3%"
        flexDir="column"
        overflow="auto">
        </s.Flex>
        
        </s.Flex>
    )
}

export default Dashboard