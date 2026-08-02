import { useEffect, useId, useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  /** Mermaid diagram source as a string */
  chart: string
  /** Optional accessible label for screen readers */
  ariaLabel?: string
}

// Initialize Mermaid once at module load, not on every render
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'strict',
  themeVariables: {
    // Base colors — tune these to match your portfolio palette
    background: 'transparent',
    primaryColor: 'rgba(255, 255, 255, 0.05)',
    primaryTextColor: '#ffffff',
    primaryBorderColor: 'rgba(255, 255, 255, 0.3)',
    secondaryColor: 'rgba(255, 145, 50, 0.1)',
    secondaryTextColor: '#ffffff',
    secondaryBorderColor: '#FF9132',
    tertiaryColor: 'rgba(255, 255, 255, 0.03)',
    tertiaryTextColor: '#ffffff',
    tertiaryBorderColor: 'rgba(255, 255, 255, 0.2)',
    // Lines and edges
    lineColor: 'rgba(255, 255, 255, 0.5)',
    edgeLabelBackground: 'rgba(15, 20, 40, 0.9)',
    // Cluster (subgraph) styling
    clusterBkg: 'transparent',
    clusterBorder: '#FF9132',
    // Font
    fontFamily: 'inherit',
    fontSize: '12px',
  },
  flowchart: {
    curve: 'basis',
    padding: 10,
    htmlLabels: true,
  },
})

const MermaidDiagram = ({ chart, ariaLabel }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [error, setError] = useState<string | null>(null)
  // useId gives us a stable, unique ID per component instance for Mermaid
  const id = useId().replace(/:/g, '')
  const diagramId = `mermaid-${id}`

  useEffect(() => {
    let cancelled = false

    const renderDiagram = async () => {
      if (!containerRef.current) return

      try {
        setError(null)
        // Mermaid v10+ API: render returns { svg, bindFunctions }
        const { svg, bindFunctions } = await mermaid.render(diagramId, chart)

        if (cancelled) return
        if (!containerRef.current) return

        containerRef.current.innerHTML = svg
        // Some diagrams have interactive elements — attach handlers if present
        if (bindFunctions) {
          bindFunctions(containerRef.current)
        }
      } catch (err) {
        if (cancelled) return
        setError('Diagram unavailable')
        console.error('[MermaidDiagram] render failed:', err)
      }
    }

    void renderDiagram()

    return () => {
      cancelled = true
    }
  }, [chart, diagramId])

  if (error) {
    return (
      <Box
        role="alert"
        sx={{
          padding: '20px',
          border: '1px solid rgba(255, 100, 100, 0.4)',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 100, 100, 0.05)',
        }}
      >
        <Typography variant="body2" color="rgba(255, 200, 200, 0.9)">
          {error}
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      ref={containerRef}
      role="img"
      aria-label={ariaLabel ?? 'Architecture diagram'}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'auto',
        // Ensure SVG scales nicely on all viewports
        '& svg': {
          maxWidth: '100%',
          height: 'auto',
        },
      }}
    />
  )
}

export default MermaidDiagram
