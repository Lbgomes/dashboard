import React, { useState } from 'react'
import * as s from '@chakra-ui/react'  
import * as svg from 'react-icons/fi'
import MyChart from '../components/myChart'

const Dashboard = () => {
    const [display, setDisplay] = useState('hide')
    const [value, setValue] = useState(1)

    return (
        <s.Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <s.Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <s.Flex
                flexDir="column"
                justifyContent="space-between"
                h={[null, null, "100vh"]}>
                    <s.Flex
                    flexDir="column"
                    as="nav">
                        <s.Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight">
                                Rise.
                        </s.Heading>
                        <s.Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                                           <s.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <s.Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <s.Icon as={svg.FiHome} fontSize="2xl" className="active-icon" />
                                </s.Link>
                                <s.Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <s.Text className="active">Home</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <s.Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <s.Icon as={svg.FiPieChart} fontSize="2xl" />
                                </s.Link>
                                <s.Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <s.Text>Credit</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <s.Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <s.Icon as={svg.FiDollarSign} fontSize="2xl" />
                                </s.Link>
                                <s.Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <s.Text>Wallet</s.Text>
                                </s.Link>
                            </s.Flex>
                            <s.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <s.Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <s.Icon as={svg.FiBox} fontSize="2xl" /></s.Link>
                                <s.Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
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
                        <s.Text textAlign="center">Murilo Gomes</s.Text>
                    </s.Flex>
                </s.Flex>
        </s.Flex>
        {/* column 2 */}
        <s.Flex
            w={["100%", "100%", "60%", "60%", "55%"]}
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            >
                <s.Heading fontWeight="normal" mb={4} letterSpacing="tight">Welcome back,<s.Flex fontWeight="bold" display="inline-flex">Murilo</s.Flex></s.Heading>
                <s.Text color="gray" fontSize="sm">My Balance</s.Text>
                <s.Text fontSize="2xl" fontWeight="bold">$5,750.25</s.Text>
                <MyChart />
                <s.Flex justifyContent="space-between" mt={8}>
                    <s.Flex align="flex-end">
                        <s.Heading as="h2" size="lg" letterSpacing="tight">Transactions</s.Heading>
                        <s.Text fontSize="small" color="gray" ml={4}>Apr 2021</s.Text>
                    </s.Flex>
                    <s.IconButton aria-label="Search database" icon={<svg.FiCalendar />} />
                </s.Flex>
                <s.Flex flexDir="column">
                    <s.Flex overflow="auto">
                        <s.Table variant="unstyled" mt={4}>
                            <s.Thead>
                                <s.Tr color="gray">
                                    <s.Th>Name of transaction</s.Th>
                                    <s.Th>Category</s.Th>
                                    <s.Th isNumeric>Cashback</s.Th>
                                    <s.Th isNumeric>Amount</s.Th>
                                </s.Tr>
                            </s.Thead>
                            <s.Tbody>
                                <s.Tr>
                                <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="amazon.jpeg" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">Amazon</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Eletronic Devices</s.Td>
                                    <s.Td isNumeric>+2$</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$242</s.Text>.00</s.Td>
                                </s.Tr>
                                <s.Tr>
                                    <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="starbucks.png" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">Starbucks</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 22, 2021 at 2:43pm</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Cafe and restaurant</s.Td>
                                    <s.Td isNumeric>+$23</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$32</s.Text>.00</s.Td>
                                </s.Tr>
                                <s.Tr>
                                    <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="youtube.png" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">YouTube</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 13, 2021 at 11:23am</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Social Media</s.Td>
                                    <s.Td isNumeric>+$4</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$112</s.Text>.00</s.Td>
                                </s.Tr>
                                {display == 'show' &&
                                <>
                                                  <s.Tr>
                                <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="amazon.jpeg" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">Amazon</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 24, 2021 at 1:40pm</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Eletronic Devices</s.Td>
                                    <s.Td isNumeric>+2$</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$242</s.Text>.00</s.Td>
                                </s.Tr>
                                <s.Tr>
                                    <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="starbucks.png" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">Starbucks</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 22, 2021 at 2:43pm</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Cafe and restaurant</s.Td>
                                    <s.Td isNumeric>+$23</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$32</s.Text>.00</s.Td>
                                </s.Tr>
                                <s.Tr>
                                    <s.Td>
                                        <s.Flex align="center">
                                            <s.Avatar size="sm" mr={2} src="youtube.png" />
                                            <s.Flex flexDir="column">
                                                <s.Heading size="sm" letterSpacing="tight">YouTube</s.Heading>
                                                <s.Text fontSize="sm" color="gray">Apr 13, 2021 at 11:23am</s.Text>
                                            </s.Flex>
                                        </s.Flex>
                                    </s.Td>
                                    <s.Td>Social Media</s.Td>
                                    <s.Td isNumeric>+$4</s.Td>
                                    <s.Td isNumeric><s.Text fontWeight="bold" display="inline-table">-$112</s.Text>.00</s.Td>
                                </s.Tr>
                                </>}
                            </s.Tbody>
                        </s.Table>
                    </s.Flex>
                    <s.Flex align="center">
                        <s.Divider />
                        <s.IconButton aria-label="show more" 
                            mt="1rem"
                            icon={display === 'show' ? <svg.FiArrowUp /> : <svg.FiArrowDown /> } 
                            onClick={() => { 
                                if(display === 'show') {
                                    setDisplay('hide')
                            }else {
                                setDisplay('show')
                            }}} />
                        <s.Divider />
                    </s.Flex>
                </s.Flex>
        </s.Flex>
        {/* column 3 */}
        <s.Flex
            w={["100%", "100%", "30%"]}
            bgColor="#F5F5F5" p="3%"
            flexDir="column"
            overflow="auto"
            minW={[null, null, "300px", "300px", "400px"]}
            >
        <s.Flex alignContent="center">
            <s.InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
                <s.InputLeftElement
                    pointerEvents="none"
                 ><svg.FiSearch color="gray" /></s.InputLeftElement>
                <s.Input type="number" placeholder="Search" borderRadius="10px" />
            </s.InputGroup>
            <s.IconButton aria-label='notification' icon={<svg.FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px" />
            <s.Flex
                w={30}
                h={25}
                bgColor="#B57295"
                borderRadius="50%"
                color="#fff"
                align="center"
                justify="center"
                ml="-3"
                mt="-2"
                zIndex="100"
                fontSize="xs"
            >
                2
            </s.Flex>
        </s.Flex>
        <s.Heading letterSpacing="tight">My Cards</s.Heading>
        {value === 1 &&
        <s.Box
        borderRadius="25px"
        mt={4}
        w="100%"
        h="200px"
        bgGradient="linear(to-t, #B57295, #29259A)">
        <s.Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
            <s.Flex justify="space-between" w="100%" align="flex-start">
                <s.Flex flexDir="column">
                    <s.Text color="gray.400">Current Balance</s.Text>
                    <s.Text fontWeight="bold" fontSize="xl">$5,750.20</s.Text>
                </s.Flex>
                <s.Flex align="center">
                    <s.Icon mr={2} as={svg.FiCreditCard} />
                    <s.Text>Rise.</s.Text>
                </s.Flex>
            </s.Flex>
            <s.Text mb={4}>**** **** **** 1289</s.Text>
            <s.Flex align="flex-end" justify="space-between">
                <s.Flex>
                    <s.Flex flexDir="column" mr={4}>
                        <s.Text textTransform="uppercase" fontSize="xs">Valid Thru</s.Text>
                        <s.Text fontSize="lg">12/23</s.Text>
                    </s.Flex>
                    <s.Flex flexDir="column">
                        <s.Text textTransform="uppercase" fontSize="xs">CVV</s.Text>
                        <s.Text fontSize="lg">***</s.Text>
                    </s.Flex>
                </s.Flex>
                <s.Icon as={svg.FiCreditCard} />
            </s.Flex>
        </s.Flex>
    </s.Box>
                }
        {value === 2 &&
        <s.Box
        borderRadius="25px"
        mt={4}
        w="100%"
        h="200px"
        bgGradient="linear(to-t, yellow.300, blue.500)">
        <s.Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
            <s.Flex justify="space-between" w="100%" align="flex-start">
                <s.Flex flexDir="column">
                    <s.Text color="gray.400">Current Balance</s.Text>
                    <s.Text fontWeight="bold" fontSize="xl">$25,321.11</s.Text>
                </s.Flex>
                <s.Flex align="center">
                    <s.Icon mr={2} as={svg.FiCreditCard} />
                    <s.Text>Rise.</s.Text>
                </s.Flex>
            </s.Flex>
            <s.Text mb={4}>**** **** **** 8956</s.Text>
            <s.Flex align="flex-end" justify="space-between">
                <s.Flex>
                    <s.Flex flexDir="column" mr={4}>
                        <s.Text textTransform="uppercase" fontSize="xs">Valid Thru</s.Text>
                        <s.Text fontSize="lg">07/29</s.Text>
                    </s.Flex>
                    <s.Flex flexDir="column">
                        <s.Text textTransform="uppercase" fontSize="xs">CVV</s.Text>
                        <s.Text fontSize="lg">***</s.Text>
                    </s.Flex>
                </s.Flex>
                <s.Icon as={svg.FiCreditCard} />
            </s.Flex>
        </s.Flex>
    </s.Box>
                }
        {value === 3 &&
        <s.Box
        borderRadius="25px"
        mt={4}
        w="100%"
        h="200px"
        bgGradient="linear(to-t, orange.300, pink.600)">
        <s.Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
            <s.Flex justify="space-between" w="100%" align="flex-start">
                <s.Flex flexDir="column">
                    <s.Text color="gray.400">Current Balance</s.Text>
                    <s.Text fontWeight="bold" fontSize="xl">$50,354.44</s.Text>
                </s.Flex>
                <s.Flex align="center">
                    <s.Icon mr={2} as={svg.FiCreditCard} />
                    <s.Text>Rise.</s.Text>
                </s.Flex>
            </s.Flex>
            <s.Text mb={4}>**** **** **** 2345</s.Text>
            <s.Flex align="flex-end" justify="space-between">
                <s.Flex>
                    <s.Flex flexDir="column" mr={4}>
                        <s.Text textTransform="uppercase" fontSize="xs">Valid Thru</s.Text>
                        <s.Text fontSize="lg">11/28</s.Text>
                    </s.Flex>
                    <s.Flex flexDir="column">
                        <s.Text textTransform="uppercase" fontSize="xs">CVV</s.Text>
                        <s.Text fontSize="lg">***</s.Text>
                    </s.Flex>
                </s.Flex>
                <s.Icon as={svg.FiCreditCard} />
            </s.Flex>
        </s.Flex>
    </s.Box>
                }
                <s.Flex justifyContent="center" mt={2}>
                    <s.Button bgColor={value === 1 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => setValue(1)}></s.Button>
                    <s.Button bgColor={value === 2 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => setValue(2)}></s.Button>
                    <s.Button bgColor={value === 3 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => setValue(3)}></s.Button>
                </s.Flex>
                <s.Flex flexDir="column" my={4}>
                    <s.Flex justify="space-between" mb={2}>
                        <s.Text fontSize="lg" fontWeight="bold">Balance</s.Text>
                        <s.Text fontSize="lg" fontWeight="bold">$5,750.20</s.Text>
                    </s.Flex>
                    <s.Flex justify="space-between" mb={2}>
                        <s.Text fontSize="lg" fontWeight="bold">Credit Limit</s.Text>
                        <s.Text fontSize="lg" fontWeight="bold">$5,750.20</s.Text>
                    </s.Flex>
                </s.Flex>
                <s.Heading letterSpacing="tight" size="md" my={4}>Send money to</s.Heading>
                <s.Flex>
                    <s.AvatarGroup size="md" max={3}>
                    <s.Avatar src="avatar-2.jpg" />
                        <s.Avatar src="avatar-3.jpg" />
                        <s.Avatar src="avatar-4.jpg" />
                        <s.Avatar src="avatar-4.jpg" />
                        <s.Avatar src="avatar-4.jpg" />
                    </s.AvatarGroup>
                    <s.Avatar icon={<svg.FiPlus />} ml={2} color="#fff" bgColor="gray.300"></s.Avatar>
                </s.Flex>
                <s.Text color="gray" mt={10} mb={2}>Card number</s.Text>
                <s.InputGroup>
                    <s.InputLeftElement
                        pointerEvents="none"><svg.FiCreditCard color="gray.700" /></s.InputLeftElement>
                    <s.Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </s.InputGroup>
                <s.Text color="gray" mt={4} mb={2}>Sum</s.Text>
                <s.InputGroup>
                    <s.InputLeftElement
                        pointerEvents="none">
                            <svg.FiDollarSign color="gray.700" />
                    </s.InputLeftElement>
                    <s.Input type="number" placeholder="130.00" />
                </s.InputGroup>
                <s.Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>Send money</s.Button>
            </s.Flex>
        </s.Flex>
    )
}

export default Dashboard