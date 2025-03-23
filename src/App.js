import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./contentStyles.css";

// Import all section data
import goalsData from "./goalsData.json";
import knowYourAudienceData from "./knowYourAudienceData.json";
import questionsData from "./questionsData.json";
import deliveryData from "./deliveryData.json";

// Put all data in the sections array
const sections = [
  goalsData,
  knowYourAudienceData, 
  questionsData,
  deliveryData
];

// Define colors for hover and active states
const hoverBlue = "rgba(64, 156, 255, 0.1)"; // Subtle blue for hover
const activeBlue = "rgba(64, 156, 255, 0.4)"; // Slightly darker blue for active/clicked state
const iconBlue = "rgb(64, 156, 255)"; // Brighter blue for icons
const textBlue = "rgb(64, 156, 255)"; // Blue for active text

export default function App() {
  // State to track expanded sections
  const [expandedSections, setExpandedSections] = useState([0]); // First section expanded by default
  
  // State to track expanded subsections for each section
  const [expandedSubSections, setExpandedSubSections] = useState({});
  
  // Handle parent accordion expansion/collapse
  const handleSectionChange = (sectionIndex) => (event, isExpanded) => {
    if (isExpanded) {
      // Add this section to expanded sections
      setExpandedSections([...expandedSections, sectionIndex]);
    } else {
      // Remove this section from expanded sections and clear its subsections
      setExpandedSections(expandedSections.filter(index => index !== sectionIndex));
      
      // Clear any expanded subsections for this section
      const newExpandedSubSections = { ...expandedSubSections };
      delete newExpandedSubSections[sectionIndex];
      setExpandedSubSections(newExpandedSubSections);
    }
  };
  
  // Handle subsection accordion expansion/collapse
  const handleSubSectionChange = (sectionIndex, subSectionIndex) => (event, isExpanded) => {
    const currentExpanded = expandedSubSections[sectionIndex] || [];
    
    if (isExpanded) {
      // Add this subsection to expanded subsections for this section
      setExpandedSubSections({
        ...expandedSubSections,
        [sectionIndex]: [...currentExpanded, subSectionIndex]
      });
    } else {
      // Remove this subsection from expanded subsections for this section
      setExpandedSubSections({
        ...expandedSubSections,
        [sectionIndex]: currentExpanded.filter(index => index !== subSectionIndex)
      });
    }
  };
  
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          bgcolor: "#0a0a0a",
          borderRadius: 2,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h2" gutterBottom>
              🧠 Teacher Cheat Sheet
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: 600, mx: "auto", mb: 4, fontWeight: "light" }}
            >
              "If you can find a truth in heaven, earth or hell, it belongs to
              our doctrine. We believe it; it is ours; we claim it." - Brigham
              Young
            </Typography>
            <Divider
              sx={{ width: 100, mx: "auto", borderBottomWidth: 2, mb: 4 }}
            />
          </Box>

          {sections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expandedSections.includes(index)}
              onChange={handleSectionChange(index)}
              sx={{
                mb: 3,
                boxShadow: 2,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px !important",
                overflow: "hidden",
                transition: "all 0.2s ease",
                "&:last-child": {
                  mb: 0,
                },
                "&::before": {
                  display: "none", // Remove the default divider
                },
                "& .MuiAccordionSummary-root": {
                  bgcolor: "background.paper",
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: hoverBlue,
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: iconBlue,
                    },
                  },
                  "&:active": {
                    bgcolor: activeBlue,
                  },
                  "&.Mui-expanded": {
                    "& .MuiTypography-root": {
                      color: textBlue,
                    },
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "rgba(255, 255, 255, 0.7)",
                    transition: "color 0.2s ease",
                    "&.Mui-expanded": {
                      color: iconBlue,
                    },
                  },
                },
                "& .MuiAccordionDetails-root": {
                  bgcolor: "background.paper",
                  pb: 3,
                },
                // Fix for the white background in collapse wrapper
                "& .MuiCollapse-wrapperInner": {
                  bgcolor: "#141414 !important",
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {section.summary && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      fontWeight: 300,
                      opacity: 0.9,
                    }}
                  >
                    {section.summary}
                  </Typography>
                )}

                {section.subSections.map((sub, i) => (
                  <Accordion
                    key={i}
                    expanded={expandedSubSections[index]?.includes(i) || false}
                    onChange={handleSubSectionChange(index, i)}
                    sx={{
                      mb: 2,
                      boxShadow: 1,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px !important",
                      overflow: "hidden",
                      transition: "all 0.2s ease",
                      "&::before": {
                        display: "none",
                      },
                      "& .MuiAccordionSummary-root": {
                        bgcolor: "background.paper",
                        transition: "background-color 0.2s ease",
                        "&:hover": {
                          bgcolor: hoverBlue,
                          "& .MuiAccordionSummary-expandIconWrapper": {
                            color: iconBlue,
                          },
                        },
                        "&:active": {
                          bgcolor: activeBlue,
                        },
                        "&.Mui-expanded": {
                          "& .MuiTypography-root": {
                            color: textBlue,
                          },
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "rgba(255, 255, 255, 0.7)",
                          transition: "color 0.2s ease",
                          "&.Mui-expanded": {
                            color: iconBlue,
                          },
                        },
                      },
                      "& .MuiAccordionDetails-root": {
                        bgcolor: "background.paper",
                      },
                      // Fix for the white background in collapse wrapper
                      "& .MuiCollapse-wrapperInner": {
                        bgcolor: "#141414 !important",
                      },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle1" fontWeight={500}>
                        {sub.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary" }}
                        component="div"
                        className="content-container"
                        dangerouslySetInnerHTML={{ __html: sub.content }}
                      />
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}
