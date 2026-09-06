'use client';

import DashBoardHeader from '@/components/ui/DashBoardHeader/DashBoardHeader';
import { messages } from '@/constants/messages';
import {
  AboutWrapper,
  Section,
  SectionTitle,
  SectionText,
  ValuesGrid,
  ValueCard,
  ValueTitle,
  ValueDescription,
  StepsGrid,
  StepCard,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  TeamGrid,
  TeamCard,
  AvatarImg,
  CardTitle,
  CardRole,
} from './style';

export const AboutUs = () => {
  const { aboutUs } = messages.website;

  return (
    <AboutWrapper>
      <DashBoardHeader
        heading={aboutUs.heading}
        subHeading={aboutUs.subHeading}
      />

      {/* Mission Section */}
      <Section>
        <SectionTitle>{aboutUs.missionTitle}</SectionTitle>
        <SectionText>{aboutUs.missionText}</SectionText>
      </Section>

      {/* Story Section */}
      <Section>
        <SectionTitle>{aboutUs.storyTitle}</SectionTitle>
        <SectionText>{aboutUs.storyText}</SectionText>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionTitle>{aboutUs.valuesTitle}</SectionTitle>
        <ValuesGrid>
          {aboutUs.values.map((val) => (
            <ValueCard key={val.title}>
              <ValueTitle>{val.title}</ValueTitle>
              <ValueDescription>{val.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      {/* How it works Section */}
      <Section>
        <SectionTitle>{aboutUs.howItWorksTitle}</SectionTitle>
        <StepsGrid>
          {aboutUs.howItWorksSteps.map((step) => (
            <StepCard key={step.step}>
              <StepNumber>{step.step}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepCard>
          ))}
        </StepsGrid>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionTitle>{aboutUs.teamTitle}</SectionTitle>
        <TeamGrid>
          {aboutUs.teamMembers.map((member) => (
            <TeamCard key={member.name}>
              <AvatarImg src={member.avatar} alt={member.name} />
              <CardTitle>{member.name}</CardTitle>
              <CardRole>{member.role}</CardRole>
            </TeamCard>
          ))}
        </TeamGrid>
      </Section>
    </AboutWrapper>
  );
};
