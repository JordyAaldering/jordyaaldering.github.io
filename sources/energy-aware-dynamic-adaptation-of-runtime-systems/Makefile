SRC := main.tex \
	bibliography.bib \
	images/*.png \
	sections/*.tex

all: paper.pdf

paper.pdf: $(SRC)
	latexmk -output-directory=build -pdf $<

clean:
	$(RM) -r build
